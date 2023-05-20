export const LinkItem = (prop) => {
  return (
    
      <span  className="link-item">
        <a href={prop.href}>{prop.text}</a>
      </span>
    
  );
};
