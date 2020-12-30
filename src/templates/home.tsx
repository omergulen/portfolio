import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Home from "../components/home"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={1}>
      <Home offset={0} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
