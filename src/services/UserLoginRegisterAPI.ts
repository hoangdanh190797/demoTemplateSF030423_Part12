import axiosAPI  from "./API";

const userLoginRegister = {
    postLogin: (userCurrent:any) => {
        return axiosAPI.post(`/${userCurrent}/login`)
    }
}

export default userLoginRegister;