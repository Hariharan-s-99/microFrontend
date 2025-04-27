export const mfConfig = {
  name: "settings",
  filename: "remoteEntry.js",
  exposes: {
    "./app": "./src/bootstrap.tsx"
  },
  shared: ["react", "react-dom"],
};
