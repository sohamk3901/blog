import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = ({categories}) => {
  return (
    <div className={styles.categoryList}>

      {categories && categories?.map((category, index) => (
          <Link
            href={`/category/${category.slug}`}
            className={`${styles.categoryItem} ${styles[category.slug]}`}
            key={index}
          >
            {category.name}
          </Link>
        ))}
    </div>
  );
};

export default MenuCategories;
