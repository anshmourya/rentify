import { user } from "@/global/user.type";
import { apis } from "@/utils/apis";
import useHelper from "./useHelper";

const useAccount = () => {
  const { createCookie } = useHelper();
  const createUser = async (user: user) => {
    try {
      await apis.post(`/api/v1/create`, {
        data: user,
      });
      return true;
    } catch (error) {
      console.error("error creating user", error);
      throw new Error(error.response.data.message);
    }
  };

  const createSession = async (user: Omit<user, "password" | "role">) => {
    try {
      const { data } = await apis.post(`/api/v1/createsession`, {
        data: user,
      });

      localStorage.setItem("uid", JSON.stringify(data.data));
      createCookie({
        data: data.data.token,
        duration: 12,
        name: "authToken",
      });

      return true;
    } catch (error) {
      console.error("error creating session", error);
      throw new Error(error.response.data.message);
    }
  };

  return { createUser, createSession };
};

export default useAccount;
