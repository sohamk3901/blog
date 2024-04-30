import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { PostDetail, Categories, PostWidget, Author, CommentsForm, Loader} from '../../components';
import Comments from '@/components/comments/Comments';
import { getPostDetails, getPosts } from '../../services';
import styles from './singlePage.module.css';
import Menu from '@/components/Menu/Menu';
import { getFeaturedPosts, getCategories } from '../../services';
import Image from 'next/image';

const PostDetails = ({ post, params }) => {
  const [categories, setCategories] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <><h1 key={index} className={`${styles.textContainer} text-3xl text-slate-950 font-semibold mb-4`}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1><br></br></>;
      case 'paragraph':
        return <p key={index} className={`${styles.textContainer} mb-8 text-indent text-slate-950 text-lg`}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <><h2 key={index} className={`${styles.textContainer} text-2xl text-slate-950 font-semibold mb-4`}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2></>;
      case 'image':
        return (
          <center className='m-10'>
            <br></br>
            <Image
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
              className={styles.image}
            />
            <br></br>
          </center>
        );
      default:
        return modifiedText;
    }
  };
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
    const slug = params.slug;
    const router = useRouter();
    if (router.isFallback) {
        return <Loader/>
    }
  
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                  <h1 className={styles.title}>{post?.title}</h1>
                  <div className={styles.user}>
                    {post?.author && (
                      <div className={styles.userImageContainer}>
                        <Image src={post.author.photo.url} alt="" fill className={styles.avatar} />
                      </div>
                    )}
                    <div className={styles.userTextContainer}>
                      <span className={styles.username}>{post?.author.name}</span>
                      <span className={styles.date}>{post.createdAt.substring(0, 10)}</span>
                    </div>
                  </div>
                </div>
                  {post?.featuredImage && (
                    <div className={`${styles.imageContainer}`}>
                      <Image src={post.featuredImage.url} alt="" fill className={styles.image} />
                    </div>
                  )}
              </div>
              <div className={styles.content}>
                <div className={styles.post}>
                  <div className={`${styles.description} ${styles.textContainer}`}
                  >
                    {post.content.raw.children.map((typeObj, index) => {
                      const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                      return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                  </div>
                  <div className={styles.comment}>
                    <Comments slug={post.slug}/>
                  </div>
                </div>
                <Menu categories={categories} featuredPosts={featuredPosts} author={post.author}/>
            </div>
        </div>
    )
}

export default PostDetails;

export async function getStaticProps( { params } ) {
    const data = (await getPostDetails(params.slug)) || [];
    return {
      props: { post: data, params },
    };
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({node: {slug}}) => ({params : {slug}})),
        fallback: true
    }
}