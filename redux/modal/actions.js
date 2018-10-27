import * as actionTypes from '../actionTypes';

export const showModal = () => {
  return {
    type: actionTypes.SHOW_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};

// const mapStateToProps = state => {
//   return {
//     show: state.isVisible,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     handleOpenClick: () => dispatch(showModal()),
//     handleCloseClick: () => dispatch(closeModal()),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Modal);
