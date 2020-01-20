import React from "react";
import { connect } from "react-redux";
import { loadPosts } from "../store/actions/action";
import { bindActionCreators } from "redux";
class Posts extends React.Component {
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
      postsFiltred = posts.posts.filter(post => post.userId == id);
    }
    return (
      <div className="card-post">
        {posts &&
          postsFiltred.map(post => (
            <div className="card-center">
              <h4>
                <b>{post.userId}</b>
              </h4>
              <h5>
                <b>{post.title}</b>
              </h5>

              <a href={"/Details/" + post.id} className="button-primary">
                Details
              </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
