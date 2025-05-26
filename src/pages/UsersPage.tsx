// src/pages/UsersPage.tsx
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../contexts/StoreProvider";
import UsersList from "../components/Users/UsersList";

const UsersPage = observer(() => {
  const { usersStore } = useStore();

  useEffect(() => {
    usersStore.fetchUsers();
  }, []);

  return (
    <div>
      <h2>Utilisateurs</h2>
      {usersStore.error && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          Erreur : {usersStore.error}
        </div>
      )}
      {usersStore.loading ? (
        <p>Chargement...</p>
      ) : (
        <UsersList
          users={usersStore.users}
          onSelect={(id) => usersStore.selectUser(id)}
        />
      )}
    </div>
  );
});

export default UsersPage;
