const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
  {
    mode: 'production',
    entry: './src/index.ts',
    devtool: 'eval-source-map',
    output: {
      filename: 'ion-sdk.min.js',
      library: {
        name: 'IonSDK',
        type: 'umd',
        export: 'default',
      },
      globalObject: 'this',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: 'tsconfig.json',
                transpileOnly: true,
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
  },
  {
    mode: 'production',
    entry: './src/connector/index.ts',
    devtool: 'source-map',
    output: {
      filename: 'ion-connector.min.js',
      library: {
        name: 'Ion',
        type: 'umd',
        export: 'default',
      },
      globalObject: 'this',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: 'tsconfig.json',
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
  },
  {
    mode: 'production',
    entry: './src/signal/grpc-web-impl.ts',
    devtool: 'source-map',
    output: {
      filename: 'grpc-web.min.js',
      library: {
        name: 'Signal',
        type: 'umd',
        export: 'default',
      },
      globalObject: 'this',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: 'tsconfig.json',
                transpileOnly: true,
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
  },
  {
    mode: 'production',
    entry: './src/signal/json-rpc-impl.ts',
    devtool: 'eval-source-map',
    output: {
      filename: 'json-rpc.min.js',
      library: {
        name: 'Signal',
        type: 'umd',
        export: 'default',
      },
      globalObject: 'this',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: 'tsconfig.json',
                transpileOnly: true,
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
  },
];