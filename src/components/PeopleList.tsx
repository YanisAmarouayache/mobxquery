import { useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import { peopleStore } from "../stores/peopleStore";
import { getAllPeople } from "../services/peopleService";

export const PeopleList = observer(() => {
  const { searchQuery } = peopleStore;

  const { data, isLoading, error } = useQuery({
    queryKey: ["people", searchQuery],
    queryFn: async () => {
      const res = await getAllPeople.get(`/people/?search=${searchQuery}`);
      return res.data.results;
    },
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {(error as Error).message}</p>;

  return (
    <ul>
      {data.map((person: any) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  );
});
