module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "velstand-verylight-green": "#e9fff1",
        "velstand-primary": "#063d0d",
        "light-green": "#6BBC8A",
        "dark-green-bg": "#070c09",
      },
      zIndex: {
        "-10": "-10",
      },
      height: {
        overview: "34rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "4rem",
      },
      backgroundImage: {
        "overview-pattern": "url('/src/assets/images/overview-bg.png')",
        login: "url('/src/assets/images/login.png')",
        "hero-gradient": "url('/src/assets/images/bg.png')",
        login: "url('/src/assets/images/login-bg.png')",
        "about-vector": "url('/src/assets/images/about-vector.svg')",
        spiral: "url('/src/assets/images/spiral.png')",
        mesh: "url('/src/assets/images/mesh.png')",
        team: "url('/src/assets/images/team-bg.png')",
        "green-gradient":
          "linear-gradient(to right, rgb(6, 17, 11), rgb(0, 0, 0))",
      },
    },
    fontFamily: {
      cairo: ["Cairo", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1224px",
        xl: "1224px",
        "2xl": "1224px",
      },
    },
  },
  plugins: [],
};
