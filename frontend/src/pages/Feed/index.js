import React, {Component} from 'react';
import './styles.css';

import Header from '../../components/Header';

import more from '../../assets/more.svg';
import noLike from '../../assets/nolike.svg';
import like from '../../assets/like.png';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

import api from '../../services/api';

class Feed extends Component {

  state = {
    feed: [],
  };

  async componentDidMount(){
    const response = await api.get('posts');

    this.setState({feed: response.data});
  }

  render(){
    return (
      <>
        <Header/>
        <section className="post-list">
         {this.state.feed.map(post => (
            <article>
              <header>
                <div className="user-info">
                  <span>{post.author}</span>
                  <span className="place">{post.place}</span>
                </div>
                <img src={more} alt="" />
              </header>

              <img src={`http://localhost:3333/files/${post.image}`} alt="" />

              <footer>
                <div className="actions">
                  <img src={noLike} alt="" />
                  <img src={comment} alt="" />
                  <img src={send} alt="" />
                </div>

                {post.likes.length > 1 ? 
                  <strong>{post.likes.length} pessoas gostaram</strong> :
                  post.likes.length == 1 ? 
                  <strong>{post.likes.length} pessoa gostou</strong> :
                  <strong>Não há curtidas</strong>
                }
                

                <p>{post.description}</p>
                <span>{post.hashtags}</span>

              </footer>
            </article>
         ))}
        </section>
      </>
    )
  }
}

export default Feed
