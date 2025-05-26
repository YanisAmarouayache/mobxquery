import { apiClient } from "../utils/apiClient";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const userService = {
  async fetchUsers(): Promise<User[]> {
    try {
      const response = await apiClient.get("/users");
      return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const message = error?.response?.data?.message || error.message || "Erreur inconnue";
      throw new Error(message);
    }
  }
};
