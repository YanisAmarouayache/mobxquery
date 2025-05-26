import { useState } from "react";
import { PeopleList } from "./components/PeopleList";
import { peopleStore } from "./stores/peopleStore";

function App() {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    peopleStore.setSearchQuery(input);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Recherche Star Wars</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ex: Luke"
      />
      <button onClick={handleSearch}>Rechercher</button>

      <PeopleList />
    </div>
  );
}

export default App;
