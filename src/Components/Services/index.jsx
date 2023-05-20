import { ServiceItem } from "./ServiceItem";

export const Services = () => {
  return (
    <div className="services-main">
      <ServiceItem
        image="./public/icons/icon-access-anywhere.svg"
        LightText="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        BoldText="Access your files, anywhere"
      />
      <ServiceItem
        image="./public/icons/icon-security.svg"
        LightText="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        BoldText="Security you can trust"
      />
      <ServiceItem
        image="./public/icons/icon-collaboration.svg"
        LightText="Securely share files and folders with friends, family and collegues for live collaboration. No email attachements required."
        BoldText="Real-time collaboration"
      />
      <ServiceItem
        image="./public/icons/icon-any-file.svg"
        LightText="Wether you're sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        BoldText="Store any type of file"
      />
    </div>
  );
};
