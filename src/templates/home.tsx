import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Home from "../components/home"
import Projects from "../components/projects"
import About from "../components/about"

const Portfolio = () => (
  <Layout>
    <Parallax pages={4.25}>
      <Home offset={0} factor={1} />
      <Projects offset={1} factor={1.75} />
      <About offset={2.75} factor={2} />
    </Parallax>
  </Layout>
);

export default Portfolio;
