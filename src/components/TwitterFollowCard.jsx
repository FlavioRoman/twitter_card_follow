import { useState } from "react";

const TwitterFollowCard = ({ avatar, username, name, isFollow }) => {
  const [state, setState] = useState(false);

  const handleFollow = () => setState(!state);
  const text = state ? "Dejar de seguir" : "Seguir";

  const buttonClassName = state
    ? { color: "#fff", backgroundColor: "#e24949" }
    : { color: "#252525", backgroundColor: "#fff" };

  return (
    <article className="container-box">
      <header className="box-info">
        <img className="box-avatar" src={avatar} alt="img-01" />
        <div className="box-name">
          <strong>{name}</strong>
          <span>@{username}</span>
        </div>
      </header>
      <aside className="box-follow">
        <button onClick={() => handleFollow()} style={buttonClassName}>
          {text}
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
