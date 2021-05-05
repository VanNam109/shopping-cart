import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Moti-Shop
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#myMenu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="myMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  Trang chủ
                </NavLink>
              </li>            
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/categoryall"
                >
                  Điện thoại
                </NavLink>
              </li>    
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/tintuc">
                  Tin tức
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <a href="./#" className="nav-link">
                  Forum
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  href="./#"
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#modelCart"
                >
                  Giỏ hàng
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    style={{ cursor: "pointer" }}
                  />
                  {/* ({props.totalNumber}) */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
