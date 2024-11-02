import axiosInstance from "../../../axios.config";

const serviceId = process.env.SERVICE_ID

export const getAGenericPageSection = async (sectionName: string) => {
  try {
    const response = await axiosInstance.get(`/core/main-website-page/${sectionName}?serviceId=${serviceId}`)
    return response.data;
  } catch (error) {
    throw new Error("Error getting our generic page section")
  }
};