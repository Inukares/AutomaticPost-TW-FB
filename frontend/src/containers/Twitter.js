import React, { Component } from "react";
import TwitterLogin from "react-twitter-auth";
import { PostForm } from "../presentational/PostForm";

export default class Twitter extends Component {
  constructor(props) {
    super(props);
  }

  renderContent = () => {
    let content = !!this.props.isAuthenticated ? (
      <div>
        <PostForm
          handleOnChange={this.props.handleOnChange}
          onTwitterToggle={this.props.onTwitterToggle}
          isTwitterToggled={this.props.isTwitterToggled}
          onAutoScheduleToggle={this.props.onAutoScheduleToggle}
          sendTwit={this.props.sendTwit}
          whatToPost={this.props.whatToPost}
          user={this.props.user}
          autoSchedule={this.props.autoSchedule}
        >
          <div>
            <button onClick={this.props.logout} className="logout-button">
              Log out from Twitter
            </button>
          </div>
        </PostForm>
      </div>
    ) : (
      <TwitterLogin
        loginUrl="http://localhost:4000/api/v1/auth/twitter"
        onFailure={this.props.onFailed}
        onSuccess={this.props.onSuccess}
        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
      />
    );
    return <div>{content}</div>;
  };

  render() {
    return (
      <div>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}
