import axiosInstance from "../../../axios.config";

const serviceId = process.env.SERVICE_ID

export const postContactUs = async (data: any) => {
  try {
    const response = await axiosInstance.post(`/core/contact-us?serviceId=${serviceId}`, data)
    return response.data.data;
  } catch (error) {
    console.log(error)
    // throw new Error("Error creating Contact")
  }
};