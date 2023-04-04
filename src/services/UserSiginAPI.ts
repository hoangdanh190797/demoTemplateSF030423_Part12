import axiosAPI  from "./API";

const UserSiginAPI = {
    postLogin: (users:any) => {
        return axiosAPI.post("users/login", users)
    },
    getUser: () => {
        return axiosAPI.get("user")

    }
}
export default UserSiginAPI;