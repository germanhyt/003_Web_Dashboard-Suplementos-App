import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src="/images/logo.png"
              style={{ height: "46" }}
              className="logo"
              alt="Ecommerce dashboard template"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/"
                exact={true}
              >
                <i className="icon fas fa-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/products"
              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">Productos</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/addproduct"
              >
                <i className="icon fas fa-cart-plus"></i>
                <span className="text">Agregar producto</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/category"
              >
                <i className="icon fas fa-list"></i>
                <span className="text">Categorias</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/orders"
              >
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">Ordenes</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/users"
              >
                <i className="icon fas fa-user"></i>
                <span className="text">Usuarios</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link disabled"
                to="/sellers"
              >
                <i className="icon fas fa-store-alt"></i>
                <span className="text">Vendedores</span>
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link disabled"
                to="/transaction"
              >
                <i className="icon fas fa-usd-circle"></i>
                <span className="text">Transacciones</span>
              </NavLink>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
