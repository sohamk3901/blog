import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import styles from './category.module.css';
import Menu from '@/components/Menu/Menu';
import CardList from '@/components/cardList/cardList';
import { getCategories, getCategoryPost, getFeaturedPosts } from '../../services';
import { PostCard, Categories, Loader, LaunchWidget } from '../../components';

const CategoryPost = ({ posts, params }) => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className={styles.container}>
        <div className={styles.content}>
          <CardList posts={posts} category={params.slug}/>
          {/* <CardList page={page}/> */}
          <Menu categories={categories} featuredPosts={featuredPosts}/>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts, params },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}