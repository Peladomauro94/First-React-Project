import { ContactItem } from "./ContactItem";

export const FooterContact = () => {
  return (
    <div className="footer-contact">
      <ContactItem img="./public/icons/icon-phone.svg" text="+1-543-123-4567" />
      <ContactItem
        img="./public/icons/icon-email.svg"
        text="example@fylo.com"
      />
    </div>
  );
};
