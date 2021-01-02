import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Home from "../components/home"
import Projects from "../components/projects"
import About from "../components/about"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { MDXProvider } from "@mdx-js/react"

const isBrowser = () => typeof window !== "undefined";
const constantsMap = {
  homeOffset: {
    400: 0,
    600: 0,
    900: 0,
    1200: 0,
    1600: 0
  },
  homeFactor: {
    400: 1,
    600: 1,
    900: 1,
    1200: 1,
    1600: 1
  },
  projectsOffset: {
    400: 1,
    600: 1,
    900: 1,
    1200: 1,
    1600: 1
  },
  projectsFactor: {
    400: 1.75,
    600: 1.75,
    900: 1.75,
    1200: 1.5,
    1600: 1.5
  },
  aboutOffset: {
    400: 2.75,
    600: 2.75,
    900: 2.75,
    1200: 2.5,
    1600: 2.5
  },
  aboutFactor: {
    400: 2,
    600: 1.75,
    900: 1.35,
    1200: 1.25,
    1600: 1.25
  },
  parallaxPages: {
    400: 4.25,
    600: 4.06,
    900: 3.78,
    1200: 3.52,
    1600: 3.52
  },
};

const components = {
  a: OutboundLink
}

const Portfolio = () => {
  let w = 400;
  console.log('w: ', w);
  return (
    <MDXProvider components={components}>
      <Layout>
        <Parallax pages={constantsMap.parallaxPages[w]}>
          <Home offset={constantsMap.homeOffset[w]} factor={constantsMap.homeFactor[w]} />
          <Projects offset={constantsMap.projectsOffset[w]} factor={constantsMap.projectsFactor[w]} />
          <About offset={constantsMap.aboutOffset[w]} factor={constantsMap.aboutFactor[w]} />
        </Parallax>
      </Layout>
    </MDXProvider>
  )
};

export default Portfolio;
