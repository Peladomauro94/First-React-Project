import { HeaderButton } from "./HeaderButton";
import { PharagraphBold } from "../../GeneralComponents/PharagraphBold";
import { PharagraphLight } from "../../GeneralComponents/PharagraphLight";

export const Header = () => {
  return (
    <div className="container headerMain-div">
      <img className="headerMain-img" src="../images/illustration-intro.png" alt="" />
      <div className="header-title">
        <PharagraphBold text="All your files in one secure location, accessible anywhere" />
      </div>
      <div className="header-text">
        <PharagraphLight text="Fylo stores all you most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers." />
      </div>
      <HeaderButton />
    </div>
  );
};
