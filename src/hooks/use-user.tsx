import axiosService from "./../axios";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => axiosService.get("/user/me"),
    enabled: !!localStorage.getItem("token"),
  });

  return { data, error, isLoading };
};

export default useUser;
