import React from "react";

import "./profile.scss";
import { Room, Today } from "@material-ui/icons";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile">
      <div className="header">
        <img src={user.avatar_url} alt="" />

        <h1>{user.name}</h1>
        <h4>@{user.login}</h4>
        <p>{user.bio}</p>

        <div className="info">
          <Today className="infoIcon" />
          {new Date(user.created_at).toDateString()}

          <Room className="infoIcon lastChild" />
          {user.location}
        </div>

        <div className="repoInfo">
          <div className="circleShape">
            <div className="number">{user.public_repos}</div>
            Repository
          </div>
          <div className="circleShape center">
            <div className="number">{user.followers}</div>
            Followers
          </div>
          <div className="circleShape">
            <div className="number">{user.following}</div>
            Following
          </div>
        </div>
      </div>
      <div className="repoSection"></div>
    </div>
  );
}

export default Profile;
