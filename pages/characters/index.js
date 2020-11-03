import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const CharactersContainer = () => {
  const [people, setPeople] = useState([]);
  const activeApi = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character/");
      const personajes = res.data;
      console.log(personajes.results);
      setPeople(personajes.results);
    } catch (error) {
      console.log("error ==>", error);
    }
  };

  useEffect(() => {
    activeApi();
  }, []);

  return (
    <div>
      <h1>Alguien aquí</h1>
      {people && people.length > 0 ? (
        people.map((item) => {
          return (
            <Fragment>
              <h1>{item.name}</h1>
            </Fragment>
          );
        })
      ) : (
        <h1>cargando.....</h1>
      )}
    </div>
  );
};

export default CharactersContainer;
