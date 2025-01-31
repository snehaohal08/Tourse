/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		colors: {
			primary: "#0287a8",
			secondary: "#00c3c7",
		},
		container:{
			center: true,
			padding:{
				DEAULTS:"1rem",
				sm:"2rem",
				lg:"2rem",
				xl:"5rem",
				"2xl":"6rem"
			}
		}
	  },
	},
	plugins: [],
  }
  