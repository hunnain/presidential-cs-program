import RegistrationFormActions from '../actions/registrationFormActions';

function registrationFormReducer(state = {
    isError: false,
    isLoading: false,
    errorMessage: false,
    successMessage: null
}, action) {

    switch (action.type) {

        case RegistrationFormActions.SUBMIT_REGISTRATION_FORM:
            return {
                ...state,
                errorMessage:null,
                successMessage:null,
                isLoading : true
            };
        case RegistrationFormActions.SUBMIT_REGISTRATION_FORM_SUCCESSFUL:
            return {
                ...state,
                isError:false,
                isLoading : false,
                errorMessage:null,
                successMessage: action.data.successMessage,
            };
        case RegistrationFormActions.SUBMIT_REGISTRATION_FORM_ERROR:
            return {
                ...state,
                errorMessage: action.data.errorMessage,
                successMessage:null,
                isError: true,
                isLoading : false
            };
        default:
            return state;
    }
}
export default registrationFormReducer;