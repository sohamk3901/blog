'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './categoryList.module.css'
import { getCategories } from '@/services';

const CategoryList = ({categories}) => {


  return (
  <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories?.map((category, index) => (
          <Link
            href={`/category/${category.slug}`}
            className={`${styles.category} ${styles[category.slug]}`}
            key={index}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;