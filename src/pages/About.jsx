import React from "react";
import Avatar from "../asset/img/avatar.svg";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me</h1>
        <img src={Avatar} alt="profile picture" />
        <p>
          My name is Isacco, I'am 22 years old and i live in a small town in
          Italy. I graduated as an electrician and after years of work i
          realized i wanted to do something else. I decided to explore the field
          of tecnology and web development, now I'am studyng to become full
          stack developer at Start2Impact University.
        </p>
      </div>
    </section>
  );
}
export default About;
