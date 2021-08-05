import React, {useState} from 'react';
import './styles.css';

import more from '../../assets/more.svg';
import noLike from '../../assets/nolike.svg';
import like from '../../assets/like.png';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

import api from '../../services/api';

function Card({id, author, place, image, likes, description, hashtags}) {

  const [userId] = useState(localStorage.getItem('devUserId'));
  
  async function likePost(){
   
    try {

      await api.post(`posts/${id}/like`, null, {
        headers: {
          user: userId
        }
      });

    } catch (error) {
      alert('Não foi possível executar essa ação.');
    }
  }

  async function noLinkePost(){

    try {

      await api.post(`posts/${id}/nolike`, null, {
        headers: {
          user: userId
        }
      });

    } catch (error) {
      alert('Não foi possível executar essa ação.');
    }

  }

  return (
    <section className="post-list">
      
        <article>
          <header>
            <div className="user-info">
              <span>{author}</span>
              <span className="place">{place}</span>
            </div>
            <img src={more} alt="" />
          </header>

          <img src={`http://localhost:3333/files/${image}`} alt="" />

          <footer>
            <div className="actions">
              {likes.includes(userId) ? 
                <img 
                  className="likes"
                  src={like} 
                  alt="Like" 
                  onClick={() =>{noLinkePost()}}
                />
                 :
                <img 
                  className="likes"
                  src={noLike} 
                  alt="noLike" 
                  onClick={() =>{likePost()}}
                />
              }
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            {likes.length > 1 ? 
              <strong>{likes.length} pessoas curtiram</strong> :
              likes.length === 1 ? 
              <strong>{likes.length} pessoa curtiu</strong> :
              <strong>Não há curtidas</strong>
            }
          
            <p>{description}</p>
            <span>{hashtags}</span>
          </footer>
        </article>
      
    </section>
  )
}

export default Card
