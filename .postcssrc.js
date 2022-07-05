module.exports = {
  plugins: {
    autoprefixer: {
      browsersList: ["Android >= 4.0", "iOS >= 8"],
    },
    "postcss-pxtorem": {
      // rootValue: 37.5,
      // rootValue: 75,
      rootValue: (arg) => {
        return arg.file.includes("vant") ? 37.5 : 75;
      },
      propList: ["*"],
    },
  },
};
