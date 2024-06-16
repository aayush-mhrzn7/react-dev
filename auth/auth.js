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
      const user = await this.account.create(
        ID.unique(),
        name,
        email,
        password
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
    } catch (error) {
      console.log("error in Login:", error);
    }
  }
  async verify() {
    return await this.account.createVerification("http://localhost:5173");
  }
  async forgetPassword({ email }) {
    return await this.account.createRecovery(
      email,
      "http://localhost:5173/forgot"
    );
  }
  async updatePassword({ userId, secret, password, repassword }) {
    return await this.account.updateRecovery(
      userId,
      secret,
      password,
      repassword
    );
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(error);
    }
  }
}
