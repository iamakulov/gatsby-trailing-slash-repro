This repo demonstrates the difference between how OSS Gatsby and Gatsby Cloud handle trailing slashes.

#### To reproduce the issue:

1. Deploy this site to Gatsby Cloud
2. Head to `<your-domain>/fff/`

#### Expected behavior: 

The trailing slash is kept because `trailingSlash: 'always'` is set in `gatsby-config.js`.

(`yarn build && yarn serve` will enforce the trailing slash, as expected.)

#### Actual behavior:

The trailing slash is removed, changing the URL to `<your-domain>/fff`
