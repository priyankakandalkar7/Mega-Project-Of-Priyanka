import conf from "../conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl);
    setproject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const useAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (useAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  async getCurrentUser() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
