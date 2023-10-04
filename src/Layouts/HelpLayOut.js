import { Outlet, NavLink } from "react-router-dom";

const HelpLayOut = () => {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        perferendis rem doloremque.
      </p>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayOut;
