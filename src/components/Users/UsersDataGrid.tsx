import { useState } from "react";
import type { User } from "../../services/userService";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface UsersDataGridProps {
  users: User[];
  onSelect: (userId: number) => void;
}

const UsersDataGrid: React.FC<UsersDataGridProps> = ({ users, onSelect }) => {
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nom",
      width: 200,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderCell: (params: any) => (
        <span
          style={{ cursor: "pointer", color: "#1976d2" }}
          onClick={() => toggleAccordion(params.row.id)}
        >
          {params.value}
        </span>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
  ];

  const rows = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
  }));

  const toggleAccordion = (userId: number) => {
    if (expandedUserId === userId) {
      setExpandedUserId(null); 
    } else {
      setExpandedUserId(userId);
    }
    onSelect(userId);
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection/>
      {/* {users.map((user) => (
        <div key={user.id}>
          <UserDetailAccordion
            user={user}
            isExpanded={expandedUserId === user.id}
            onToggle={() => toggleAccordion(user.id)}
          />
        </div>
      ))} */}
    </Box>
  );
};

export default UsersDataGrid;
