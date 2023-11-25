import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const URL = "https://rickandmortyapi.com/api/character";

export default function Detail() {
   const {id} = useParams();
   const [character, setCharacter] = useState({});

   useEffect(() => {
      axios(`${URL}/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         }
      );
      return setCharacter({});
   }, [id]);

   if (character) {
      return (
         <div className="detail">
            <div>
               <h1>{character.name}</h1>
               <h2>STATUS | {character.status}</h2>
               <h2>GENDER | {character.species}</h2>
               <h2>SPECIE | {character.gender}</h2>
               <h2>ORIGIN | {character.origin && character.origin.name}</h2>
            </div>
            <div className="wrap-img">
               <img src={character.image} className='character-img'/>
            </div>
         </div>
      );
   } else {
      return (
         <>
            No se pudo cargar el personaje
         </>
      )
   }
 }
 