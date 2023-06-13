import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlantList(plants));
  }, []);

  function handleSearch(input) {
    setSearchInput(input);
    console.log(input);
  }

  const filteredPlantList = plantList.filter((plant) =>
    plant.name.includes(searchInput)
  );

  return (
    <main>
      <NewPlantForm />
      <Search onSearch={handleSearch} />
      <PlantList plantList={filteredPlantList} />
    </main>
  );
}

export default PlantPage;
