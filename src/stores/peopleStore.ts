import { makeAutoObservable } from "mobx";

export class PeopleStore {
  searchQuery = "";

  constructor() {
    makeAutoObservable(this);
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }
}

export const peopleStore = new PeopleStore();
