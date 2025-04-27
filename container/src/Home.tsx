import { mount } from "home/app";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const elementRef = useRef(null);
  const containerHistory = useHistory();
  useEffect(() => {
    const updateContainerBrowserHistory = (remoteMemoryLocation: any) => {
      const containerBrowserLocation = containerHistory.location;
      if (remoteMemoryLocation.pathname !== containerBrowserLocation.pathname)
        containerHistory.push(remoteMemoryLocation.pathname);
    };

    const { updateRemoteMemoryHistory } = mount(elementRef.current, {
      updateContainerBrowserHistory,
    });
    let containerHistoryListener: any;
    if (updateRemoteMemoryHistory) {
      console.log("uppdating remote state for Home");
      containerHistoryListener = containerHistory.listen(
        updateRemoteMemoryHistory
      );
    }
    return () => {
      console.log("UNMOUNT ,HOMe");
      containerHistoryListener && containerHistoryListener();
    };
  }, []);

  return (
    <>
      {console.log("MOUNTING HOME")}
      <div ref={elementRef} />
    </>
  );
}

export default Home;
