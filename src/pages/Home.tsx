import React from "react";
import Loading from "../components/Loading";
import MainStyled from "../components/StyledComponents/MainStyled";

const Contact = React.lazy(() => import("../components/Contact"));
const Presentation = React.lazy(() => import("../components/Presentation"));
const Technologies = React.lazy(() => import("../components/Technologies"));
const About = React.lazy(() => import("../components/About"));

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
