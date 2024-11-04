import axiosInstance from "../../../axios.config";

export const getUserInfo = async () => {
    return await axiosInstance.get(`/auth/users/me/`);
};

export const updateUserInfo = async (data: any) => {
    return await axiosInstance.patch(`/auth/users/me/`, data);
};
