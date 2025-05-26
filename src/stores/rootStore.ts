import { HomeStore } from "./HomeStore";
import { UsersStore } from "./UsersStore";

export class RootStore {
  usersStore: UsersStore;
  homeStore: HomeStore;

  constructor() {
    this.usersStore = new UsersStore();
    this.homeStore = new HomeStore();
  }
}

export const rootStore = new RootStore();
