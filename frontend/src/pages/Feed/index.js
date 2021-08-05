/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import './styles.css';

import Header from '../../components/Header';
import Card from '../../components/Card';

import api from '../../services/api';


function Feed() {

  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts(){

    

      try {
  
        const loadedPosts = await api.get('posts');
        const {data} = loadedPosts;
        setAllPosts(data);

        registerToSockets();
      } catch (error) {
        alert('Não foi possível carregar os posts.');
      }
    }
    getAllPosts();
     
  }, []);
 

  function registerToSockets(){
    const socket = io('http://localhost:3333');

    socket.on('post', (newPost) => {
      setAllPosts({allPosts: [newPost, ...allPosts]})
    })
  }

  return (
    <>
      <Header/>
      {allPosts.map((post) => (
        <Card
          key={post._id}
          id={post._id}
          author={post.author}
          place={post.place}
          image={post.image}
          likes={post.likes}
          description={post.description}
          hashtags={post.hashtags}
        />
      ))}
    </>
  )
}

export default Feed;