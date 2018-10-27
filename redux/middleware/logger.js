const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const res = next(action);
      console.log('[Middleware] next state', store.getState());
      return res;
    };
  };
};

export default logger;
