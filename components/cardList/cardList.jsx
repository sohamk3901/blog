import React from "react";
import styles from "./cardList.module.css";
import Image from "next/image";
import Card from "../card/Card";



const CardList = ({ posts, category }) => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category ? `Blogs related to ${category}` : `Recent Posts`}</h1>
      <div className={styles.posts}>
        {posts.length === 0 && <h3>Coming Soon!</h3>}
        {posts.length > 0 && posts?.slice(0).reverse().map((post) => (
          <Card  key={post._id} post={post.node} />
        ))}
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  );
};

export default CardList;
