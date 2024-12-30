import type { Configuration } from "@rspack/cli";
import {
  CssExtractRspackPlugin,
  HtmlRspackPlugin,
  ProgressPlugin,
} from "@rspack/core";
import { TsCheckerRspackPlugin } from "ts-checker-rspack-plugin";

const isDev = process.env.NODE_ENV === "development";

const common: Configuration = {
  mode: isDev ? "development" : "production",
  externals: ["fsevents"],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  output: {
    publicPath: "./",
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
            },
            transform: {
              react: {
                runtime: "automatic",
              },
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: [CssExtractRspackPlugin.loader, "css-loader"],
        type: "javascript/auto",
      },
      {
        test: /\.(ico|png|svg|eot|woff?2?)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new TsCheckerRspackPlugin({ typescript: { mode: "write-references" } }),
  ],
  watch: isDev,
  devtool: isDev ? "source-map" : false,
};

const main: Configuration = {
  ...common,
  target: "electron-main",
  entry: {
    main: "./src/main.ts",
  },
};

const preload: Configuration = {
  ...common,
  target: "electron-preload",
  entry: {
    preload: "./src/preload.ts",
  },
};

const renderer: Configuration = {
  ...common,
  target: "web",
  entry: {
    app: "./src/web/index.tsx",
  },
  plugins: [
    new CssExtractRspackPlugin(),
    new HtmlRspackPlugin({
      inject: "body",
      template: "./src/web/index.html",
    }),
  ],
};

export default [main, preload, renderer];
