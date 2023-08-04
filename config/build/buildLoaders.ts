import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(options): webpack.RuleSetRule[] {
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, scssLoader];
}
