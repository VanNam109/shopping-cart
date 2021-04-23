/* eslint-disable jsx-a11y/anchor-is-valid */
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Header: React.FC<any> = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
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
                <a href="#" className="nav-link active">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Tin tức công nghệ
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  Sản phẩm
                </a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    Điện thoại
                  </a>
                  <a href="#" className="dropdown-item">
                    Laptop
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Forum
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
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
export default Header;
