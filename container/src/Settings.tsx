import { mount } from "settings/app";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

function Settings() {
  const elementRef = useRef(null);
  const containerHistory = useHistory();
  useEffect(() => {
    if(!elementRef) return;
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
      console.log("uppdating remote state for Settings");
      containerHistoryListener = containerHistory.listen(
        updateRemoteMemoryHistory
      );
    }
    return () => {
      console.log("UNMOUNT ,SETTINGS");
      containerHistoryListener && containerHistoryListener();
    };
  }, []);

  return (
    <>
      {console.log("MOUNTING SETTINGS")}
      <div ref={elementRef} />
    </>
  );
}

export default Settings;
