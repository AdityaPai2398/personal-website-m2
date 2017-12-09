import React from 'react';
// import PropTypes from 'prop-types';
import BlogPreview from './BlogPreview';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.pageSize = 5;
    this.state = {curPage: 0, posts: []};
  }

  getPost(postNum) {
    // return promise for new post
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'
    return fetch(baseUrl + postNum)
      .then(response => response.json())
      .then(json => {
        // console.log('parsed json', json); // eslint-disable-line no-console
        return {id: json.id, title: json.title, content: json.body};
      }).catch(function(ex) {
        console.log('fetch exception :(', ex); // eslint-disable-line no-console
      });
  }

  movePage(amount) {
    const newPage = this.state.curPage + amount;
    var promises = [];
    for(let post = this.pageSize*newPage+1; post<this.pageSize*(newPage+1); post++) {
      promises.push(this.getPost(post));
    }
    Promise.all(promises).then(newPosts => {
      if(newPosts.length>0) {
        console.log('got pages: ', newPosts); //eslint-disable-line no-console
        this.setState((prevState)=> (
          Object.assign({}, prevState, {posts:newPosts})
        ));
      }
    }).catch(reason => {
      console.log("movePage Exception: ", reason); // eslint-disable-line no-console
    })
  }

  componentDidMount() {
    console.log('Blog mounted'); // eslint-disable-line no-console
    this.movePage(0);
  }
  componentWillReceiveProps() {
    console.log('Blog receiveProps'); // eslint-disable-line no-console
    // this.movePage(0);
    console.log("State: ", this.state.posts); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
      <section className="container-fluid" id="aboutHeader">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <h1><span>Blog (UPDATE ID)</span></h1>
          </div>
        </div>
      </div>
      </section>
      <section className="container top-pad">
        <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            {this.state.posts.map((el) =>{
              console.log("Post!"); // eslint-disable-line no-console
              return (<BlogPreview title={el.title} content={el.content} key={el.id}/>);
            })}
          </div>
        </div>
      </section>
      </div>
    );
  }

}

BlogPage.propTypes = {

}

export default BlogPage;