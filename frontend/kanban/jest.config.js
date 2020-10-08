// jest.config.js
//Sync object
module.exports = {
  verbose: true,
  preset: '@vue/cli-plugin-unit-jest',
   moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx", "node"],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  }
};

//Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};
