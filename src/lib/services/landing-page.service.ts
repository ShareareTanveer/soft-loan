import axiosInstance from "../../../axios.config";

const serviceId = process.env.SERVICE_ID

export const getLandingPageData = async () => {
  try {
    const response = await axiosInstance.get(`/core/main-website-page?serviceId=${serviceId}`);
    return response.data.data;
  } catch (error) {
    // throw new Error("Error getting landing page data")
  }
};
