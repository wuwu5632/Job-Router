import { NavLink, Outlet,Link } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
const RootLayOut = () => {
  return (
    <>
      <header>
        <nav>
        {/* <h1>Jobarouter</h1> */}
         <Link className="H1Link" to="/"><h1>Jobarouter</h1></Link> 
         <div className="NavLink">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
          </div>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayOut;
