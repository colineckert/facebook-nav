import React from 'react';

function App() {
  return (
    <Navbar>
      <li>X</li>
    </Navbar>
  )
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  )
}

function NavItem(props) {
  return (
    <li>
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  )
}

export default App;

