import { makeAutoObservable, runInAction } from "mobx";
import { userService, type User } from "../services/userService";

export class UsersStore {
  users: User[] = [];
  selectedUser: User | null = null;
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUsers() {
    this.loading = true;
    this.error = null;

    try {
      const users = await userService.fetchUsers();
      runInAction(() => {
        this.users = users;
        this.loading = false;
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      runInAction(() => {
        this.error = err.message || "Erreur de chargement";
        this.loading = false;
      });
    }
  }

  selectUser(userId: number) {
    this.selectedUser = this.users.find((u) => u.id === userId) || null;
  }
}
