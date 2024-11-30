export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        iphone12pro: "390px", // iPhone 12 Pro / 13 Pro
        iphone14promax: "430px", // iPhone 14 Pro Max
      },
    },
  },
  plugins: [],
};
