import React from "react";

import { connect } from "react-redux";
import users from "./Users";
import { loadPosts } from "../store/actions/action";
import { bindActionCreators } from "redux";

class Details extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    let { posts } = this.props;
    let postsFiltred = [];
    console.log(this.props);
    const { id } = this.props.match.params;
    if (posts && posts.posts) {
      postsFiltred = posts.posts.filter(post => post.id === id);
    }
    return (
      <div className="card-post">
        {posts &&
          postsFiltred.map(post => (
            <div className="card-center">
              <h4>
                <b>{post.body}</b>
              </h4>
              <h5>
                <b></b>
              </h5>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });
const mapDispatchToProps = dispatch => ({
  loadPosts: bindActionCreators(loadPosts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
