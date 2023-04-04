import axiosAPI from './API';

const UserSignupAPI = {
    postUserSignup: (users: any) => {
        return axiosAPI.post('https://api.realworld.io/api/users', users)
    }
}
export default UserSignupAPI;
