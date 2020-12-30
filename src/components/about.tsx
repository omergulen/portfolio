/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Inner from "../elements/inner"
import Content from "../elements/content"
// @ts-ignore
import AboutMDX from "../sections/about"
import Background from "./bg"
import Footer from "./footer"
import PageLinks from "./page-links"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Background offset={offset} factor={factor} />
    <Content speed={0.4} offset={offset} factor={factor} overrideSx={{ alignItems: `left`, padding: `10vw`, width: `100%` }}>
      <Inner>
        <AboutMDX />
          <PageLinks hide="About" />
          <Footer />
      </Inner>
    </Content>
  </div>
)

export default About
