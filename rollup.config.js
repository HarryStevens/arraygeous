import babel from "rollup-plugin-babel";

export default {
  input: "index.js",
  output: {
    file: "build/arraygeous.js",
    format: "umd",
    name: "arr"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ] 
};