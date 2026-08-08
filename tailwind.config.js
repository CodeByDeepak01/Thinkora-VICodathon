/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7ff",
          100: "#e9edff",
          500: "#5b6cff",
          600: "#4454e6",
          700: "#3440bf",
        },

        accent: {
          400: "#3ddc97",
          500: "#20c997",
        },

        surface: {
          100: "#f8fafc",
          200: "#f1f5f9",
          300: "#e2e8f0",
        },
      },

      fontSize: {
        display: [
          "2.25rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "700",
          },
        ],

        h1: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "700",
          },
        ],

        h2: [
          "1.375rem",
          {
            lineHeight: "1.875rem",
            fontWeight: "600",
          },
        ],

        body: [
          "0.95rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],

        caption: [
          "0.8rem",
          {
            lineHeight: "1.125rem",
            fontWeight: "500",
          },
        ],
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.06)",
        elevated: "0 18px 45px rgba(15, 23, 42, 0.1)",
      },

      maxWidth: {
        app: "72rem",
      },
    },
  },

  plugins: [],
};