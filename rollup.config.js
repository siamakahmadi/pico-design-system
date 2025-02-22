import babel from 'rollup-plugin-babel';
import postcss from "rollup-plugin-postcss";

export default {
  input: 'components/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**', // Exclude node_modules
      runtimeHelpers: true        // Ensure runtimeHelpers is enabled here
    }),
    postcss(), // Add this line to process CSS files
  ]
};
