import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return <div className={styles.header}>
    <nav className="container">
      <Link to="/" end>Home</Link>
      <Link to="login" end>Login / Criar</Link>
    </nav>
  </div>;
};

export default Header;
