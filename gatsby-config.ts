import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'spirogyra',
    siteUrl: 'https://www.yourdomain.tld'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-styled-components', {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/ // See below to configure properly
      }
    } 
  },
  {
    resolve: 'gatsby-plugin-favicons',
    options: {
      logo: './src/assets/favicon.ico',
      appName: 'Spirogyra',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        yandex: false,
        windows: false
      }
    }
  },
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp']
}

export default config
