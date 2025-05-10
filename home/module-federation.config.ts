export const mfConfig = {
  name: "home",
  filename: "remoteEntry.js",
  exposes: {
    "./app": "./src/bootstrap.tsx",
  },
  shared: [],
};
