"use client";
import React, {useEffect, useState} from 'react';
import parse from 'html-react-parser';
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { submitComment } from '@/services';
import { getComments } from '@/services';



const Comments = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handleCommentSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  };

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Leave a comment</h1>
      
      <div className={styles.write}>
        <textarea
          value={formData.comment || ''}
          name="comment"
          placeholder="write a comment..."
          className={styles.input}
          onChange={onInputChange}
        />
        <div className={styles.info}>
          <input 
          type="text" 
          value={formData.name} 
          onChange={onInputChange} 
          className={styles.name} 
          placeholder="Name" 
          name="name" />
          <input 
          type="email" 
          value={formData.email} 
          onChange={onInputChange} 
          className={styles.email}
          placeholder="Email" 
          name="email" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer ml-2 " htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className={styles.alert}>All fields are required.</p>}
        <button className={styles.button} onClick={handleCommentSubmission}>
          Post Comment
        </button>
        {showSuccessMessage && <span className={styles.success}>Comment submitted for review</span>}
      </div>




      <div className={styles.comments}>
        <h3 className={styles.title}>{comments.length} {(comments.length > 1 || comments.length < 1)? 'Comments' : 'Comment'}</h3>
        {comments.length > 0
          && comments?.map((comment, index) => (
              <div className={styles.comment} key={index}>
                <div className={styles.user}>
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{comment.name}</span>
                    <span className={styles.date}>{comment.createdAt.substring(0, 10)}</span>
                  </div>
                </div>
                <p className={styles.desc}>{parse(comment.comment)}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
