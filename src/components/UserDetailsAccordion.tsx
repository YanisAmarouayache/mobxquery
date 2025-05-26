// src/components/UserDetailAccordion.tsx
import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { User } from "../services/userService";

interface UserDetailAccordionProps {
  user: User | null;
  isExpanded: boolean;
  onToggle: () => void;
}

const UserDetailAccordion: React.FC<UserDetailAccordionProps> = ({ user, isExpanded, onToggle }) => {
  return (
    <Accordion expanded={isExpanded} onChange={onToggle}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${user?.id}-content`}
        id={`panel-${user?.id}-header`}
      >
        <Typography variant="h6">{user?.name} - Détails</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">Email: {user?.email}</Typography>
        <Typography variant="body2">ID: {user?.id}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default UserDetailAccordion;
