import {
    CALC_DOCUMENTS_AMOUNT,
    HANDLE_REQUEST_ERROR,
    HANDLE_REQUEST_SUCCESS,
    CLOSE_BANNER,
    CONTROL_LOADING,
    OPEN_MODAL_WITH_DETAIL,
    CLOSE_MODAL_WITH_DETAIL
} from './constants';

export const calcDocumentAmount = documentsAmount => ({
    type: CALC_DOCUMENTS_AMOUNT,
    documentsAmount
});

export const handleRequestError = error => ({
    type: HANDLE_REQUEST_ERROR,
    error
});

export const handleRequestSuccess = message => ({
    type: HANDLE_REQUEST_SUCCESS,
    message
});

export const closeBanner = () => ({
    type: CLOSE_BANNER,
});

export const controlLoading = (flag) => ({
    type: CONTROL_LOADING,
    loading: flag
});

export const openModalWithDetail = (cardInfo, isDetailsInPDF) => ({
    type: OPEN_MODAL_WITH_DETAIL,
    cardInfo,
    isDetailsInPDF
});

export const closeModalWithDetail = () => ({
    type: CLOSE_MODAL_WITH_DETAIL
});