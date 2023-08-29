import ProfileCard from "./ProfileCard";

function Profiles({ users }) {
  return users.map((user) => {
    const name = `${user.first_name} ${user.last_name}`;

    return (
      <ProfileCard
        key={user.id}
        id={user.id}
        email={user.email}
        name={name}
        avatarUrl={user.avatar}
      />
    );
  });
}
export default Profiles;
