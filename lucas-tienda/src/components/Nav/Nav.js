import Brand from "../Brand/Brand";
import CartWidget from "../CartWinget/CartWidget";
import './Nav.css'
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

let activeStyle = {
    color: "red",
    backgroundColor: "white",
    padding: "10px"
  };
  

const Nav = () => {
    return(
        <header>
            <div className="containerBrand">
                <Brand />
            </div>
            <nav className="containerItemLinks">
                <ul>

                    <NavLink
                        to="/"
                        className="NavLink"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                        Home
                    </NavLink>

                    <NavLink
                        to="/MotherBoard"
                        className="NavLink"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                        Motherboard
                    </NavLink>

                    <NavLink
                        to="/NoteBook"
                        className="NavLink"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                        Notebook
                    </NavLink>

                    <NavLink
                        to="/PlacasDeVideo"
                        className="NavLink"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                        Placas de video
                    </NavLink>

                    <NavLink
                        to="/Contact"
                        className="NavLink"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                        Contacto
                    </NavLink>
                </ul>
            </nav>                       
            <div className="containerCart">
                <CartWidget />
            </div>

        </header>
    )
}

export default Nav;