class RegistrationFormActions {

    static SUBMIT_REGISTRATION_FORM = "SUBMIT_REGISTRATION_FORM";
    static SUBMIT_REGISTRATION_FORM_SUCCESSFUL = "SUBMIT_REGISTRATION_FORM_SUCCESSFUL";
    static SUBMIT_REGISTRATION_FORM_ERROR = "SUBMIT_REGISTRATION_FORM_ERROR";
    
    static  submitRegistrationForm(data){
        return {
            type : this.SUBMIT_REGISTRATION_FORM,
            data : data
        }
    }
    static submitRegistrationFormSuccessul(data){
        return {
            type : this.SUBMIT_REGISTRATION_FORM_SUCCESSFUL,
            data: data
        }
    }
    static submitRegistrationFormError(data){
        return {
            type : this.SUBMIT_REGISTRATION_FORM_ERROR,
            data: data
        }
    }
}

export default RegistrationFormActions;