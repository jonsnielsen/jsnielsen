module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    const prefix = '';

    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: [
        {
          loader: require.resolve('file-loader'),
          options: {
            publicPath: `${prefix}/_next/static/videos/`,
            outputPath: `${isServer ? '../' : ''}static/videos/`,
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
};
