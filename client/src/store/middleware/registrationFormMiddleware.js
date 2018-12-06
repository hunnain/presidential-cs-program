import RegistrationFormActions from '../actions/registrationFormActions';
import axios from 'axios';
import Path from '../../config/path';

class RegistrationFormMiddleware {

    static submitRegistrationFrom(registrationForm) {
        return dispatch => {
            dispatch(RegistrationFormActions.submitRegistrationForm())
            axios.post(`${Path.REGISTRATION_FORM}`, {
                formData: registrationForm
            })
            .then((response) => {
                console.log("response from server ",response);
                if (!response.data.success) {
                    dispatch(RegistrationFormActions.submitRegistrationFormError({errorMessage:response.data.message}));
                }
                else {
                    dispatch(RegistrationFormActions.submitRegistrationFormSuccessul({successMessage:response.data.message}));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(RegistrationFormActions.submitRegistrationFormError({errorMessage:"Something Went Wrong, Please Try Again!"}));
            });
        }
    }
}

export default RegistrationFormMiddleware;