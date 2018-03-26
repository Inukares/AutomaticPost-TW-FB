import React from "react";
import PropTypes from "prop-types";
import "./postForm.css";

export const PostForm = props => {
  const {
    handleOnChange,
    onTwitterToggle,
    isTwitterToggled,
    onAutoScheduleToggle,
    sendTwit,
    whatToPost,
    user,
    autoSchedule
  } = props;
  return (
    <div id="wrapper">
      <header>
        <div id="page-banner">
          <h1 className="title">Automate your posts !</h1>

          <p>User: {user.email}</p>
          <p>{props.children}</p>

          <div className="checkboxWrapper">
            <input
              type="checkbox"
              className="hide"
              onChange={() => onTwitterToggle()}
              checked={isTwitterToggled}
            />
            <span>Post to Twitter</span>
          </div>
          <div className="checkboxWrapper">
            <input
              type="checkbox"
              className="hide"
              onChange={() => onAutoScheduleToggle()}
              checked={autoSchedule}
            />
            <span>Schedule posts</span>
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
};

PostForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  sendTwit: PropTypes.func.isRequired,
  onTwitterToggle: PropTypes.func.isRequired,
  onAutoScheduleToggle: PropTypes.func.isRequired,
  isTwitterToggled: PropTypes.bool.isRequired,
  whatToPost: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  autoSchedule: PropTypes.bool.isRequired
};
