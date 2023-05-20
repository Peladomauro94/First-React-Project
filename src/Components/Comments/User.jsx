export const User = (prop) => {
  return (
    <div className="user">
      <img className="user-image" src={prop.img} alt="" />
      <div className="user-features">
        <p className="user-pharagraph">
          <b>{prop.name}</b>
        </p>
        <p className="user-pharagraph">Founder & CEO, Huddle</p>
      </div>
    </div>
  );
};
