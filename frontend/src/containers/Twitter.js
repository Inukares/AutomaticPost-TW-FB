import React from "react";
import TwitterLogin from "react-twitter-auth";
import { PostForm } from "../presentational/PostForm";
import PropTypes from "prop-types";

export const Twitter = props => {
  const renderContent = () => {
    let content = !!props.isTwitterAuthenticated ? (
      <div>
        <PostForm
          handleOnChange={props.handleOnChange}
          onTwitterToggle={props.onTwitterToggle}
          isTwitterToggled={props.isTwitterToggled}
          onAutoScheduleToggle={props.onAutoScheduleToggle}
          sendTwit={props.sendTwit}
          whatToPost={props.whatToPost}
          user={props.user}
          autoSchedule={props.autoSchedule}
        >
          <button
            onClick={props.twitterLogout}
            className="twitterLogout-button"
          >
            Log out from Twitter
          </button>
        </PostForm>
      </div>
    ) : (
      <TwitterLogin
        loginUrl="http://localhost:4000/api/v1/auth/twitter"
        onFailure={props.onFailed}
        onSuccess={props.onSuccess}
        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
      />
    );
    return <div>{content}</div>;
  };

  return (
    <div>
      <div>{renderContent()}</div>
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
