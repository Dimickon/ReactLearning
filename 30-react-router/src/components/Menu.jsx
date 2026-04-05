import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <header>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          to="."
          end
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: 'lightyellow', textDecoration: 'none' } : {}
          }
          to="about"
        >
          About
        </NavLink>
        <NavLink to="contacts">Contacts</NavLink>
        <NavLink to="contact">NF</NavLink>
      </nav>
    </header>
  );
};

export default Menu;
