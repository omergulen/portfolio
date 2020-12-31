import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Projects from "../components/projects"

const StuffPage = () => (
  <Layout>
    <Parallax pages={1}>
      <Projects offset={0} factor={1} />
    </Parallax>
  </Layout>
)

export default StuffPage;
