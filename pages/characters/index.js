import Link from 'next/link'
import React, { Component } from 'react';
import axios from "axios";
 

/*const ENDPOINT =  'https://rickandmortyapi.com/api/character/'
export async function getServerSideProps(){
  const  res  = await fetch(ENDPOINT)
  const  data  = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function CharactersContainer({data}) {
  console.log('data' , data);
  const { results = [] } = data;
  return(
    <>
      <h1>Lista de personajes</h1>
      {results.map(character => {
        const { id, name , image} = character;
        return (
          <>
          <img src={image} alt={`${name} Thumbnail`} />
          <p key={id}> {name} </p>
          </>
          )
      })}
    </>
  )
}*/


const CharactersContainer = ({ personajes, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  console.log(personajes + 'AQUI')
  return (
    <>
      <h1>Alguien aqui?</h1>
      {
        personajes.lenght >= 1 ? personajes.map(personaje => {
          return <p>{personaje.name}</p>
        }) : <h2> Nada por aqui</h2>
      }


     
    </>
      
      
  );
};

CharactersContainer.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://rickandmortyapi.com/api/character/');
    const personajes = res.data;
    return { personajes };
  } catch (error) {
    return { error };
  }
};

export default CharactersContainer;