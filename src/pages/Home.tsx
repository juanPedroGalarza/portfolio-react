import React from "react";
import Loading from "../components/Loading.js";
import MainStyled from "../components/StyledComponents/MainStyled.js";

const Contact = React.lazy(() => import("../components/Contact.js"));
const Presentation = React.lazy(() => import("../components/Presentation.js"));
const Technologies = React.lazy(() => import("../components/Technologies.js"));
const About = React.lazy(() => import("../components/About.js"));

export default function Home(): JSX.Element {
  return (
    <MainStyled>
      <React.Suspense fallback={<Loading />}>
        <Presentation />
        <About />
        <Technologies />
        <Contact />
      </React.Suspense>
    </MainStyled>
  );
}
