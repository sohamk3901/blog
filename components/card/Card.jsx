import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './card.module.css';

const PostCard = ({key, post}) => {
  return (
    <div className={styles.container} key={key}>
      {post.featuredImage.url && (
        <div className={styles.imageContainer}>
          <Image src={post.featuredImage.url} fill alt="" className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>

        <Link href={`/post/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
        <div className={styles.first}>
          <span className={styles.author}>
            {post.author.name + ` `}
          </span>
          <span className={styles.date}>
            - {post.createdAt.substring(0, 10)}
          </span>
          <div className={styles.detail}>
            {post.categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}>
                <span className={styles.category}>{category.slug}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <span className={styles.desc}>{post?.excerpt.substring(0,60)}...</span>
        <Link href={`/post/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default PostCard