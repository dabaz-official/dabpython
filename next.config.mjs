import withMarkdoc from '@markdoc/next.js'
import { createLoader } from 'simple-functional-loader'

import withSearch from './src/markdoc/search.mjs'

const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack(config) {
    config.module.rules.unshift({
      test: /\.md$/,
      use: [
        createLoader(function (source) {
          return (
            source + '\nexport const metadata = frontmatter.nextjs?.metadata;'
          )
        }),
      ],
    })

    return config
  },
}

export default withMDX(
  withSearch(
    withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
  )
)
