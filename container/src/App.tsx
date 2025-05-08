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
        <Route path="/mf1" component={Home} />
        <Route path="/mf2" component={Settings} />
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
  const [activeTab, setActiveTab] = useState<"mf1" | "mf2">("mf1");

  useEffect(() => {
    // Navigate to default tab (home) on component mount
    history.push("/mf1/home");
  }, []);

  const handleTabChange = (tab: "mf1" | "mf2") => {
    setActiveTab(tab);
    history.push(`/${tab}/home`); // This updates the route on tab change
  };

  return (
    <div className="tabbar-container">
      <div className="tabbar-tabs">
        <button
          className={`tabbar-tab ${activeTab === "mf1" ? "active" : ""}`}
          onClick={() => handleTabChange("mf1")}
        >
          Home
        </button>
        <button
          className={`tabbar-tab ${activeTab === "mf2" ? "active" : ""}`}
          onClick={() => handleTabChange("mf2")}
        >
          Settings
        </button>
      </div>

      <div className="tabbar-content">
        {/* Content rendered based on active tab */}
        {activeTab === "mf1" && <Home />}
        {activeTab === "mf2" && <Settings />}
      </div>
    </div>
  );
};
