import AuthActions from '../actions/authActions';
import axios from 'axios';
import Path from '../../config/path';

class AuthMiddleware {

    static sendPhoneNo(phoneNo) {
        return dispatch => {
            dispatch(AuthActions.phoneNoSent(phoneNo))
            axios.post(`${Path.SEND_VERIFICATION_CODE}`, {
                phone: phoneNo
            })
            .then((response) => {
                console.log("response from server ",response);
                if (response.data.error) {
                    dispatch(AuthActions.phoneNoSentError());
                }
                else {
                    dispatch(AuthActions.phoneNoSentSuccessul(phoneNo));
                }
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }
}

export default AuthMiddleware;