import {NavLink} from "react-router-dom";

export default function PageNav(){
  return(
    <nav>
      <ul>
        <li> <NavLink to="/"> Home </NavLink> </li>
        <li> <NavLink to="/pricing"> Product </NavLink> </li>
        <li> <NavLink to="/product"> Pricing </NavLink> </li>
      <li> <NavLink to="*"> Not Found </NavLink> </li>
      </ul>
    </nav>
  )
}