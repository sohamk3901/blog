import React from 'react';
import Image from 'next/image';
import styles from './author.module.css';


const Author = ( {author }) => {
  return (
    <div className={styles.author}>
        <div className={styles.info}>
            <div className={styles.imageContainer}>
                <Image
                    alt={author.name}
                    unoptimized
                    height={100}
                    width={100}
                    className={styles.image}
                    src={author.photo.url}
                />
            </div>
            <h3 className={styles.name}>{author.name}</h3>
        </div>

      <p className={styles.bio}>{author.bio}</p>
    </div>
  )
}

export default Author