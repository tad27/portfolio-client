import React from "react";

import SectionLayout from "./SectionLayout";

function About() {
  return (
    <section id="about" className="py-20">
      <SectionLayout title="About Me">
        <p>
          I'm passionate about using my skills to create high-quality software
          that meets the needs of both users and stakeholders. Let's work
          together to build the next great web app!
        </p>
      </SectionLayout>
    </section>
  );
}

export default About;
