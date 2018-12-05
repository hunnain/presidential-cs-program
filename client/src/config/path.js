export default class path {

    static BASE_URL = "http://localhost:3001";

    static SEND_VERIFICATION_CODE = path.BASE_URL + "/auth/sendverificationcode";

    static VERIFY_CODE = path.BASE_URL + "/auth/verifycode";

    static TEST = path.BASE_URL + "/api/rest/test";

}
