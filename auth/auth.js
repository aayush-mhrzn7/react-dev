import { Client, Account, ID } from "appwrite";
import config from "../config/config";
export class Auth {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(config.appUrl).setProject(config.appID);
    this.account = new Account(this.client);
  }
  async signup({ name, email, password }) {
    try {
      console.log(email, password);
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (user) {
        return this.login({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      console.log("error in Signup: ", error);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("error in Login:", error);
    }
  }
  async verify() {
    try {
      return await this.account.createVerification("http://localhost:5173");
    } catch (error) {
      console.log("error during verification: ", error);
    }
  }
  async updateVerify({ userId, secret }) {
    try {
      return await this.account.updateVerification(userId, secret);
    } catch (error) {
      console.log("error during update verification", error);
    }
  }
  async forgetPassword({ email }) {
    try {
      return await this.account.createRecovery(
        email,
        "http://localhost:5173/forgot"
      );
    } catch (error) {
      console.log("error during phase 1 of password", error);
    }
  }
  async updatePassword({ userId, secret, password, repassword }) {
    try {
      return await this.account.updateRecovery(
        userId,
        secret,
        password,
        repassword
      );
    } catch (error) {
      console.log("error when updating password phase 2", error);
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("error when getting user: ", error);
    }

    return null;
  }
  async Oauth() {
    try {
      return this.account.createOAuth2Session(
        "google",
        "http://localhost:5173",
        "http://localhost:5173/failed"
      );
    } catch (error) {
      console.log("erro in o-auth", error);
    }
  }
  async logout() {
    try {
      return await this.account
        .deleteSessions()
        .then(console.log("logged out"));
    } catch (error) {
      console.log("error when deleting session: ", error);
    }
  }
}

const auth = new Auth();
export default auth;
