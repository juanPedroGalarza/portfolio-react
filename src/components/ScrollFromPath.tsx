import * as React from "react";
import { Location, useLocation } from "react-router-dom";

interface ElementOnWindow extends Element {
  offsetTop: number
};

export default function ScrollFromPath(): JSX.Element {
  const location: Location = useLocation();

  function scrollToSection():void {
    const elementLocated: ElementOnWindow | null = document.querySelector(location.hash);
    elementLocated && window.scrollTo(0, elementLocated.offsetTop - window.innerHeight * .20);
  };

  function scrollTop():void {
    window.scrollTo(0, 0);
  };

  React.useEffect((): void => {
    location.hash ? scrollToSection() : scrollTop()
  }, [location.pathname, location.hash]);
  return (
    <></>
  );
};