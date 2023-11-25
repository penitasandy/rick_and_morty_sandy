import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Nav(props) {
   return (
      <>
         <button>
            <NavLink to='/home'>Home</NavLink>
         </button>
         <button>
            <NavLink to='/about'>About</NavLink>
         </button>
         <button>
            <NavLink to='/favorites'>Favorites</NavLink>
         </button>
         <button onClick={props.logout}>Logout</button>
         <SearchBar onSearch={props.onSearch} />
         <button onClick={props.onClickRandom}>Random</button>
      </>
   );
}
