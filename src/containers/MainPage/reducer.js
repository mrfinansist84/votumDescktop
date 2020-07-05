import {
  CALC_DOCUMENTS_AMOUNT,
  HANDLE_REQUEST_ERROR,
  HANDLE_REQUEST_SUCCESS,
  CLOSE_BANNER,
  CONTROL_LOADING,
  OPEN_MODAL_WITH_DETAIL,
  CLOSE_MODAL_WITH_DETAIL
} from "./constants";

const initialState = {
  documentsAmount: 0,
  message: null,
  loading: false,
  modalDocument: null,
  isDetailsInPDF: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CALC_DOCUMENTS_AMOUNT:
      return {
        ...state,
        documentsAmount: action.documentsAmount,
      };
    case HANDLE_REQUEST_ERROR:
      return {
        ...state,
        message: {
          messageType: "error",
          messageText: action.error.message,
        },
      };
    case HANDLE_REQUEST_SUCCESS:
      return {
        ...state,
        message: {
          messageType: "success",
          messageText: action.message,
        },
      };
      case CLOSE_BANNER:
      return {
        ...state,
        message: null,
      };
      case CONTROL_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
      case OPEN_MODAL_WITH_DETAIL:
      return {
        ...state,
        modalDocument: action.cardInfo,
        isDetailsInPDF: action.isDetailsInPDF,
      };
      case CLOSE_MODAL_WITH_DETAIL:
      return {
        ...state,
        modalDocument: null,
        isDetailsInPDF: false
      };
    default:
      return state;
  }
};

export { initialState, reducer };

export default reducer;
