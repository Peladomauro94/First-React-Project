import { CommentBox } from "./CommentBox";

export const Comments = () => {
  return (
    <div className="commentContainer">
      <div className="commentContainer-div">
        <img className="quotes-img" src="./images/bg-quotes.png" alt="" />    
        <CommentBox img="./images/profile-1.jpg" name="Satish Patel" />
      </div>
      <CommentBox img="./images/profile-2.jpg" name="Bruce McKenzle" />
      <CommentBox img="./images/profile-3.jpg" name="Iva Boyd" />
    </div>
  );
};
