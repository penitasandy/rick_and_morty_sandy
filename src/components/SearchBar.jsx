import {useState} from "react";

export default function SearchBar(props) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={handleClick}>Agregar</button>
      </div>
   );
}
