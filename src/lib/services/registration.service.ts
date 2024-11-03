import axiosInstance from "../../../axios.config";

export const registration = async (data: any) => {
    return await axiosInstance.post(`/auth/users/`, data);
};
