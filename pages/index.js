import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, LaunchWidget } from '../components';
import { getPosts } from '../services';
import { getCategories } from '../services';
import { useState, useEffect } from 'react';
import Menu from '@/components/Menu/Menu';
import Featured from '@/components/featured/Featured';
import CardList from '@/components/cardList/cardList';
import styles from './homepage.module.css'
import { Roboto } from 'next/font/google';
import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';
import CategoryList from '@/components/categoryList/CategoryList'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home({ posts }) {
  // const page = parseInt(searchParams.page) || 1;
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  // const page = parseInt(searchParams.page)
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div>
      <div className={`${roboto.className} container mx-auto px-10 my-8`}>
        {dataLoaded && <Featured post={featuredPosts.slice(0).reverse()[0]} />}
        <CategoryList categories={categories}/>
        <div className={styles.content}>
          <CardList posts={posts}/>
          {/* <CardList page={page}/> */}
          {dataLoaded && <Menu categories={categories} featuredPosts={featuredPosts}/>}
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

