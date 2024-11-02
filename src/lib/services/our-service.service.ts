import axiosInstance from "../../../axios.config";

const serviceId = process.env.SERVICE_ID

export const getOurServiceList = async () => {
  try {
    const response = await axiosInstance.get(`/our-service?serviceId=${serviceId}`);
    return response.data.data;
  } catch (error) {
    throw new Error("Error getting our service list")
  }
};

export const getOurServiceDetail = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/our-service/${id}?serviceId=${serviceId}`);
    return response.data.data;
  } catch (error) {
    throw new Error("Error getting our service Detail")
  }
};
