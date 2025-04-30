import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "./Home";
import Settings from "./Settings";

const App = () => (
  <Router>
    <div className="host-container">
      <TabBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </div>
  </Router>
);
const root = ReactDOM.createRoot(
  document.getElementById("container") as HTMLElement
);
root.render(<App />);

const TabBar: React.FC = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState<"home" | "settings">("home");

  useEffect(() => {
    // Navigate to default tab (home) on component mount
    history.push("/home");
  }, []);

  const handleTabChange = (tab: "home" | "settings") => {
    setActiveTab(tab);
    history.push(`/${tab}`); // This updates the route on tab change
  };

  return (
    <div className="tabbar-container">
      <div className="tabbar-tabs">
        <button
          className={`tabbar-tab ${activeTab === "home" ? "active" : ""}`}
          onClick={() => handleTabChange("home")}
        >
          Home
        </button>
        <button
          className={`tabbar-tab ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => handleTabChange("settings")}
        >
          Settings
        </button>
      </div>

      <div className="tabbar-content">
        {/* Content rendered based on active tab */}
        {activeTab === "home" && <Home />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
};
