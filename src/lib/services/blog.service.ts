import axiosInstance from "../../../axios.config";

const serviceId = process.env.SERVICE_ID

export const getBlogList = async () => {
  try {
    const response = await axiosInstance.get(`/blog?serviceId=${serviceId}`);
    return response.data.data;
  } catch (error) {
    throw new Error("Error getting our service list")
  }
};

export const getBlogDetail = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/blog/${id}?serviceId=${serviceId}`);
    return response.data.data;
  } catch (error) {
    throw new Error("Error getting our service Detail")
  }
};
