import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../contexts/StoreProvider";

const UserDetailPage = observer(() => {
  const { usersStore } = useStore();
  const user = usersStore.selectedUser;

  if (!user) return <p>Aucun utilisateur sélectionné.</p>;

  return (
    <div>
      <h2>Détails de : {user.name}</h2>
      <p>Email : {user.email}</p>
    </div>
  );
});

export default UserDetailPage;
