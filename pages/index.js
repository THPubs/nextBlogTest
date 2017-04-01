import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

class HomePage extends Component {
  constructor(){
    super()

    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    const self = this;

    // axios.get('http://e139daab.ngrok.io/wp-json/wp/v2/posts')
    //   .then(function (response) {
    //     self.setState({
    //       posts: response.data
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  posts(){
    const {posts} = this.state;

    return posts.map((post) => {
      console.log(post)
      return (
        <div>
          <h2><Link href='/blog?id=first' as='/blog/first'><a>My first blog post</a></Link>{post.title.rendered}</h2>
          <div>The big description...</div>
        </div>
      )
    })
  }

  render(){
    return (
      <div>
      <HEAD>
<meta name="google-site-verification" content="-54zHeU7cqpHWDRkfEXJCWUjlZSCEtS-te8Y7GvQzrU" />
      </HEAD>
      <ul>
        <li></li>
        <li><Link href='/blog?id=second' as='/second'><a>My second blog post</a></Link></li>
        <li><Link href='/blog?id=last' as='/blog/last'><a>My last blog post</a></Link></li>
      </ul>
        {this.posts()}
      </div>
    )
  }
}

export default HomePage;
