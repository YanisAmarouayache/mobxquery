import React from "react";
import { observer } from "mobx-react-lite";
import UsersDataGrid from "./UsersDataGrid";
import type { User } from "../../services/userService";

interface UsersListProps {
  users: User[];
  onSelect: (userId: number) => void;
}

const UsersList: React.FC<UsersListProps> = observer(({ users, onSelect }) => {

  const handleSelectUser = (userId: number) => {
    onSelect(userId);
  };

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      <UsersDataGrid users={users} onSelect={handleSelectUser} />
    </div>
  );
});

export default UsersList;
