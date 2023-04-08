const JEST_CONFIG = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|scss)$": "identity-obj-proxy",
  },
};

export default JEST_CONFIG;
