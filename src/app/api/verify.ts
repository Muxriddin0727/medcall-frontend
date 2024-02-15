import { serverApi } from "../../lib/config";
import { useAxios } from "../customHooks/useAxios";
import { useDispatch } from 'react-redux';
import { setTokenExpired } from '../redux/userSlice';

let member_data: any = null;

const token = localStorage.getItem("token");
if (token) {
  const memberDataJson: string | null = localStorage.getItem("member_data");
  if (memberDataJson) {
    try {
      member_data = JSON.parse(memberDataJson);
    } catch (error) {
      console.error("Failed to parse member data:", error);
    }
  }

  if (member_data) {
    member_data.mb_image = member_data.mb_image
      ? `${serverApi}/${member_data.mb_image}`
      : "/icons/default_user.png";
  }
} else {
  localStorage.removeItem("member_data");
}

console.log("== verify ==");
console.log(member_data);

export const verifiedMemberData = member_data ? member_data : null;


export const useCheckTokenValidity = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const checkTokenValidity = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(setTokenExpired());
      return false;
    }
    try {
      const response = await axios({
        url: "/client/check-token",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.data;
      if (!data.valid) {
        dispatch(setTokenExpired());
        return false;
      }

      return true;
    } catch (error) {
      // Handle errors appropriately, e.g., log them and return false
      console.error("Error checking token validity:", error);
      dispatch(setTokenExpired());
      return false;
    }
  };

  return checkTokenValidity;
};
