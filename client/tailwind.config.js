/* eslint-disable no-undef */


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: { max: '1050px' },
        sm: { max: '550px' },
        lg: { min: '1050px' },
      },
      colors: {
        black: {
          900: '#000000',
          '900_01': '#0e0e0e',
          '900_dd': '#000000dd',
          '900_60': '#00000060',
          '900_99': '#00000099',
        },
        ghostwhite: "#f3f3f9",
        white: "#fff",
        whitesmoke: "#eaeaea",
        gray: {
          50: '#fafafa',
          100: '#f3f3f8',
          200: '#eaeaea',
          300: '#e0e0e0',
          600: '#71717a',
          700: '#666666',
          900: '#161616',
          '200_01': '#ebebeb',
          '50_02': '#fffaf4',
          '100_03': '#eff6ff',
          '50_04': '#f9fbff',
          '200_19': '#eaeaea19',
          '100_04': '#eef2f9',
          '50_03': '#fff5f5',
          '50_01': '#fff6f6',
          '900_01': '#1d1d1d',
          '100_01': '#f3f3f9',
          '100_02': '#f4f4f5',
          '300_01': '#e5e5e5',
          '100_05': '#f6f6f6',
          '700_01': '#6a6a6a',
          '300_02': '#e6e6e6',
          '600_03': '#6b6c7e',
          '900_02': '#18181b',
          '600_01': '#72787f',
          '900_03': '#232628',
          '900_04': '#292929',
          '700_02': '#686565',
          '700_03': '#686666',
          '600_02': '#737880',
          '900_a8': '#161616a8',
          '900_99': '#16161699',
        },
        blue: {
          50: '#eef4ff',
          700: '#165fe3',
          '50_01': '#e0eafc',
          '50_02': '#dae7ff',
          A200: '#4a7fdf',
          A200_19: '#4a7fdf19',
          A200_01: '#4c83e0',
          A200_e5: '#4c83e0e5',
          A700_19: '#2761ff19',
        },
        blue_gray: {
          100: '#d9d9d9',
          200: '#bec0d2',
          900: '#333333',
          '900_19': '#2b2b2b19',
          '900_02': '#292d32',
          '900_03': '#183444',
          '900_01': '#272833',
        }, yellow: { 50: '#fff7ee' },
        light_green: { 50: '#f1ffe9', A700: '#51bd0e' },
        indigo: {
          50: '#e7e7ed',
          400: '#4779cd',
          500: '#3462b4',
          700: '#224e9e',
          A700: '#0042fc',
        },
        deep_orange: { 50: '#ffe4e6', 900: '#b45309' },
        light_blue: { 600: '#0ea5e9' },
        green: { 50: '#e8ffe9', 500: '#3fb63c', 700: '#1faf38' },
        red: { 400: '#f43f5e', 600: '#f13737', 800: '#be123c' },
        amber: { 700: '#f59e0b', '700_19': '#f59e0b19' },
        deep_purple: { 500: '#6d28d9', A200: '#8b5cf6', A200_19: '#8b5cf619' },
        orange: { A200: '#f19e38' },
        teal: { 400: '#10b981', 800: '#047857', '400_19': '#10b98119' },
        cornflowerblue: "#4a7fdf",
        darkslategray: "#292d32",
      },
      boxShadow: {
        bs4: 'inset 0px -1px  1px 0px #e7e7ed',
        bs: '0px 0px  1px 0px #4a7fdf19',
        bs3: 'inset -0.9px -0.9px  1px 0px #e0e0e0',
        bs2: '-7px 0px  40px 0px #224e9e',
        bs1: 'inset -5px 0px  20px 0px #3462b4',
      },
      spacing: {},
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        mini: "15px",
        "base-4": "15.4px",
        "8xs-1": "4.1px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "9xl": "28px",
      "3xl": "22px",
      mini: "15px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq718: {
        raw: "screen and (max-width: 718px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq260: {
        raw: "screen and (max-width: 260px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
