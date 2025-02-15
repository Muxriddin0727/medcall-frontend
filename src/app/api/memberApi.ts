import assert from "assert";
import { Definer } from "../../lib/Definer";
import { serverApi } from "../../lib/config";
import axios from "axios";
import { Member, } from "../../types/user";
import { MemberLiken } from "../../types/others";


class MemberApi {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async loginRequest(login_data: any) {
    try {
      const result = await axios.post(serverApi + "/client//login", login_data, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const member: Member = result.data.data;

      localStorage.setItem("member_data", JSON.stringify(member));
      localStorage.setItem("isAuthenticated", "true");
      return member;
    } catch (err: any) {
      console.log(`ERROR ::: loginRequest  ${err.message}  `);
      throw err;
    }
  }

  public async signupRequest(signup_data: any) {
    try {
      const result = await axios.post(this.path + "/client/sign-up", signup_data, {
        withCredentials: true,
      });

      console.log("state:", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const member: Member = result.data.data;

      localStorage.setItem("member_data", JSON.stringify(member));
      return member;
    } catch (err: any) {
      console.log(`ERROR ::: signupRequest  ${err.message}  `);
      throw err;
    }
  }

  public async logOutRequest() {
    try {
      const result = await axios.get(serverApi + "/client/logout", {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:", result.data.state);

      localStorage.removeItem("isAuthenticated");
      const logout_result = result.data.state;
      return logout_result === "success";
    } catch (err: any) {
      console.log(`ERROR ::: logOutRequest  ${err.message}  `);
      throw err;
    }
  }

  public async getChosenMember(id: string) {
    try {
      const url = `/member/${id}`,
        result = await axios.get(this.path + url, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const member: Member = result.data.data;

      return member;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenMember  ${err.message}  `);
      throw err;
    }
  }

  public async memberLikeTarget(data: any) {
    try {
      const url = "/client/member-liken",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const like_result: MemberLiken = result.data.data;

      return like_result;
    } catch (err: any) {
      console.log(`ERROR ::: memberLikeTarget  ${err.message}  `);
      throw err;
    }
  }

}
export default MemberApi;
