import axiosAPI from './API';

const UserSignupAPI = {
    postUserSignup: (users: any) => {
        return axiosAPI.post(`${users}`)
    }
}
export default UserSignupAPI;
