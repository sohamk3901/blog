import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import Author from "../author/author";

const Menu = ({categories, featuredPosts, author}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={true} featuredPosts={featuredPosts}/>
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories categories={categories}/>
      {author && <><h2 className={styles.subtitle}>Know the Writer</h2>
      <h1 className={styles.title}>Author</h1>
      <Author author={author} /></>}
    </div>
  );
};

export default Menu;
