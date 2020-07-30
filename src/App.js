import React, { Component } from 'react';
import './App.css';
import PostsList from "./PostsList"


export default class App extends Component {

  state = {
    posts: [
      {
        id: '1',
        title: 'A very Hot Cake',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, mollitia.',
        user: {
          uid: '123',
          displayName: 'Vitaliy Likhachev',
          email: 'Lihoy84@yadex.ru',
          photoURL: '',
        },
        stars: 1,
        comments: 50,
      },
      {
        id: '2',
        title: 'A very Could Cake',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, mollitia.',
        user: {
          uid: '123',
          displayName: 'Vitaliy Likhachev',
          email: 'Lihoy84@yadex.ru',
          photoURL: '',
        },
        stars: 6,
        comments: 25,
      },
    ],
  }

  handleCreate = post => {
    const { posts } = this.state;
    this.setState ({ posts: [ post, ...posts ] })
  }

  render () {
    const { posts } = this.state;
    return (

        <div className="App">
          <PostsList
              posts={ posts }
              onCreate={ this.handleCreate }/>
        </div>

    )
  }
}

