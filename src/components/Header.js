import React from "react";
import styles from "./Header.module.css";
import Logo from "../assets/logo.png";

export default function Header(){
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} alt={"GQL"} />
      <h1 className={styles.text}>/gql/ - GraphQL</h1>
    </header>
  )
}