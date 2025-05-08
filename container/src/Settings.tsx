import { mount } from "settings/app";
import { useEffect, useRef } from "react";

function Settings() {
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

export default Settings;
