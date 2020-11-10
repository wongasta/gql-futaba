//@flow
import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../assets/logo.png";

export default function Header():React.Node{
  return (
    <header className={styles.header}>
      <Link to={"/posts"}><img src={Logo} className={styles.logo} alt={"GQL"} /></Link>
      <h1 className={styles.text}>/gql/ - GraphQL</h1>
    </header>
  )
}