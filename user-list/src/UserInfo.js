import "./UserInfo.css";

function UserInfo({ name, email }) {
  const mailTo = `mailto:${email}`;

  return (
    <div className="user-info">
      <h2 className="profile-name">{name}</h2>

      <h3 className="profile-email">
        <a href={mailTo}>{name}</a>
      </h3>
    </div>
  );
}

export default UserInfo;
