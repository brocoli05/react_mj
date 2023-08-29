import "./Avatar.css";

function Avatar({ imgUrl, name }) {
  return (
    <img
      widt="128"
      height="128"
      className="profile-avatar"
      src={imgUrl}
      alt={name}
      title={name}
    />
  );
}

export default Avatar;

/*
class Avatar {
  constructor(imgUrl, name) {
    this.url = imgUrl;
    this.name = name;
  }

  render() {
    // Create an <img> element for the profile's avatar
    const img = new Image();

    img.src = this.url;
    img.alt = this.name;
    img.title = this.name;
    img.className = 'profile-avatar';
    img.width = 128;
    img.height = 128;

    return img;
  }
}

module.exports = Avatar;
*/
