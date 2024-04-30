import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage, featuredPosts }) => {
  return (
    <div className={styles.items}>
      {featuredPosts && featuredPosts.slice(0).reverse().slice(0, 3).map((post, index) => (
        <Link href={`/post/${post.slug}`} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.featuredImage.url} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.space}`}>{post.categories[0].name}</span>
            <h3 className={styles.postTitle}>
              {post.title}
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>{post.author.name}</span>
              <span className={styles.date}> - {post.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </Link>
      ))}
      
    </div>
  );
};

export default MenuPosts;
