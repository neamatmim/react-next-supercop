import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer, { logger } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleWare = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    import('../hocs/ComposeWithReduxDevTools').then(DEV_TOOLS => {
      const composeWithReduxDevTools = DEV_TOOLS.default;
      return composeWithReduxDevTools(applyMiddleware(...middleware));
    });
  }
  return applyMiddleware(...middleware);
};
function initializeStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleWare([sagaMiddleware])
  );

  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleware.run(rootSaga);
  };
  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga();
    // dispatch saga tasks
    tasks(store.dispatch);
    // Stop running and wait for the tasks to be done
    await store.stopSaga();
    // Re-run on client side
    if (!isServer) {
      store.runSaga();
    }
  };

  // Initial run
  store.runSaga();

  return store;
}

export default initializeStore;
