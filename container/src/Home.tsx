import { mount } from "home/app";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const elementRef = useRef(null);
  useEffect(() => {
    mount(elementRef.current, {});
  }, []);

  return (
    <>
      <div ref={elementRef} />
    </>
  );
}

export default Home;
