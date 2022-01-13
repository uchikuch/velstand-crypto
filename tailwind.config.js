module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "velstand-verylight-green": "#e9fff1",
        "velstand-primary": "#063d0d",
        "velstand-black": "#353945",
        "light-green": "#6BBC8A",
        "dark-green-bg": "#070c09",
        dashboard: "#FAFAFB",
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
        signup: "url('/src/assets/images/signup.jpg')",
        "hero-gradient": "url('/src/assets/images/bg.png')",
        login: "url('/src/assets/images/login.jpg')",
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
    fontSize: {
      xxs: ".60rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1324px",
        xl: "1324px",
        "2xl": "1324px",
      },
    },
  },
  plugins: [],
};
