export const mfConfig = {
  name: "home",
  filename: "remoteEntry.js",
  exposes: {
    "./app": "./src/bootstrap.tsx",
  },
  shared: [
    "react",
    "react-dom",
    {
      "react-router-dom": {
        eager: true,
        singleton: true,
      },
    },
  ],
};
