import React from "react";
import { Services } from "../Services";
import { StayProductive } from "../StayProductive";
import { Comments } from "../Comments";
import { GetEarly } from "../GetEarly"


function Main() {
  return (
    <main>
      <Services />
      <StayProductive />
      <Comments />
      <GetEarly/>
    </main>
  );
}

export default Main;
