export const ContactItem = (prop) => {
  return (
    <div className="contact-item">
      <img className="footer-img" src={prop.img} alt="" />
      <p className="contact-item-pharagraph">{prop.text}</p>
    </div>
  );
};
