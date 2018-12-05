import AuthActions from '../actions/authActions';

function authReducer(state = {
    user: null,
    isError: false,
    isLoading: false,
    errorMessage: false,
    phoneNo: null,
    token: null,
    successMessage: null
}, action) {

    switch (action.type) {

        case AuthActions.PHONE_NO_SENT:
            return {
                ...state,
                phoneNo: action.data.phoneNo,
                isLoading : true
            };
            break;

        case AuthActions.PHONE_NO_SENT_SUCCESSFUL:
            return {
                ...state,
                isError:false,
                isLoading : false,
                successMessage: action.data.successMessage
            };
            break;

        case AuthActions.PHONE_NO_SENT_ERROR:
            return {
                ...state,
                errorMessage: action.data.errorMessage,
                isError: true,
                isLoading : false
            };
            break;

        case AuthActions.VERIFICATION_CODE_SENT:
            return {
                ...state,
                token: action.data.token,
                isLoading : true
            };
            break;

        case AuthActions.VERIFICATION_CODE_SENT_SUCCESSFUL:
            return {
                ...state,
                isError: false,
                isLoading : false
            };
            break;

        case AuthActions.VERIFICATION_CODE_SENT_ERROR:
            return {
                ...state,
                errorMessage: action.data.errorMessage,
                isError: true,
                isLoading : false
            };
            break;
        default:
            return state;
    }
}
export default authReducer;