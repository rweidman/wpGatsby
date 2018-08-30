module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'thewholemind.me',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
}
