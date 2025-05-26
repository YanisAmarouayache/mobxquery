import { makeAutoObservable } from "mobx";

export class HomeStore {
  welcomeMessage = "Bienvenue sur l'accueil";

  constructor() {
    makeAutoObservable(this);
  }

  updateMessage(newMessage: string) {
    this.welcomeMessage = newMessage;
  }
}

