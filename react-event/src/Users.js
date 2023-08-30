function Users({ users, onSelected }) {
  if (!Array.isArray(users)) {
    return null;
  }
  console.log(users);
  /*
   "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        }, ...
      ]
  */
  return (
    <div>
      {users.map((user) => {
        const { id, first_name, last_name, avatar } = user;
        const name = `${first_name} ${last_name}`;
        return (
          <img
            key={id}
            src={avatar}
            alt={name}
            onClick={() => onSelected(user)}
            onMouseOver={() => onSelected(user)} // User name shows up when the mouse hovers over the image
            onMouseOut={() => onSelected(null)}
          />
        );
      })}
    </div>
  );
}

export default Users;
