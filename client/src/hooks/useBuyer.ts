import { apis } from "@/utils/apis";

const useBuyer = () => {
  const getPropertyList = async () => {
    try {
      const { data } = await apis.get("api/v1/property/list", {});
      return data.data;
    } catch (error) {
      console.log("error while getting property list", error);
      throw error;
    }
  };

  return { getPropertyList };
};

export default useBuyer;
