export const mfConfig = {
  name: "container",
  remotes: {
    settings: "settings@http://localhost:8082/remoteEntry.js",
    home: "home@http://localhost:8081/remoteEntry.js",
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
