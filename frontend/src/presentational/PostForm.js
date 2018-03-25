import React from "react";
import PropTypes from "prop-types";
import "./postForm.css";

export const PostForm = ({
  handleOnChange,
  onTwitterToggle,
  twitterToggled,
  sendTwit,
  whatToPost
}) => (
  <div id="wrapper">
    <header>
      <div id="page-banner">
        <h1 className="title">Automate your posts !</h1>
        <div className="checkboxWrapper">
          <input
            type="checkbox"
            className="hide"
            onClick={() => onTwitterToggle()}
            value={twitterToggled}
          />
          <span>Post to Twitter</span>
        </div>
      </div>
    </header>
    <div id="add-book">
      <input
        type="text"
        onChange={handleOnChange}
        value={whatToPost}
        placeholder="Add a post..."
      />
      <button onClick={sendTwit}>Add post</button>
    </div>
  </div>
);

// export const PostForm = ({ handleOnChange }) => (
//   <div>
//     <span>Type in your post message</span>
//     <input type="text" onChange={handleOnChange} placeholder="type sth" />
//   </div>
// );

PostForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  sendTwit: PropTypes.func.isRequired,
  onTwitterToggle: PropTypes.func.isRequired,
  twitterToggled: PropTypes.bool.isRequired,
  whatToPost: PropTypes.string.isRequired
};
