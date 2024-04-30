import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";


const Featured = ({post}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>The Future is Now!</b> <br></br>Explore the frontiers of Science, Technology and Business.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={post.featuredImage.url} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.postDesc}>
            {post.excerpt}
          </p>
          <Link href={`/post/${post.slug}`}className={styles.button} >Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
