import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">

          <Link to="/"><img
            src="trinity-mixes-logo-zip-file/png/logo-no-background.png"
            alt="" /></Link>

          <div className="navs">
            <Link to="/" className="link names one"><span className="homeLink">Home</span></Link>
            <Link to='/' className="link names"><span className="mainLink" >Mixes</span></Link>
            <Link to='/' className="link names"><span className="mainLink" >Songs</span></Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
