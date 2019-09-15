import React from 'react';
import { Link } from "react-router-dom";

const MainHeader = (props) => {

  return (
    <Link to="/">
      <header className="banner" role="banner" aria-level="1">
        <h1>Study Notebook</h1>        
      </header>
    </Link>
  );
}

export default MainHeader;