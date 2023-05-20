import { ListItem } from "./ListItem";

export const Lista = (prop) => {
  return (
    <ul className="header-list lightLetter">
      <ListItem text="Features" />
      <ListItem text="Team" />
      <ListItem text="Sing in" />
    </ul>
  );
};
