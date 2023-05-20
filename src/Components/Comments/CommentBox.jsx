import { PharagraphLight } from "../GeneralComponents/PharagraphLight";
import { User } from "./User";

export const CommentBox = (prop) => {
  return (
    <div className="comentBox">
      <PharagraphLight text="
        Fylo has impoved our team productivity by an order of magnitude. Since
        making the switch our team has became a well-oiled collaboration
        machine."/>
      <User img={prop.img} name={prop.name} />
    </div>
  );
};
