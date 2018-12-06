import AuthActions from '../actions/authActions';
import axios from 'axios';
import Path from '../../config/path';

class AuthMiddleware {

    static sendPhoneNo(data) {
        return dispatch => {
            dispatch(AuthActions.phoneNoSent(data))
            axios.post(`${Path.SEND_VERIFICATION_CODE}`, {
                phone: data.phoneNo
            })
            .then((response) => {
                console.log("response from server ",response);
                if (!response.data.success) {
                    dispatch(AuthActions.phoneNoSentError({errorMessage:response.data.message}));
                }
                else {
                    dispatch(AuthActions.phoneNoSentSuccessul({successMessage:response.data.message}));
                }
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }
}

export default AuthMiddleware;