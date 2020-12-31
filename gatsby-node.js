const standardBasePath = `/`

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  const basePath = themeOptions.basePath || standardBasePath

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/home.tsx`),
  })
  createPage({
    path: basePath + 'stuff',
    component: require.resolve(`./src/templates/stuff.tsx`),
  })
  createPage({
    path: basePath + 'about',
    component: require.resolve(`./src/templates/about.tsx`),
  })
}
