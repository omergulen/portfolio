/** @jsx jsx */
import { jsx } from "theme-ui"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Background from "./bg"
// @ts-ignore
import Intro from "../sections/intro"
import Footer from "./footer"
import PageLinks from "./page-links"

const Home = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div sx={{ display: `flex`, justifyContent: `center` }}>
    <Background offset={offset} factor={factor} />
    <Content
      sx={{ variant: `texts.bigger` }}
      speed={0.4}
      offset={offset}
      factor={factor}
      overrideSx={{ alignItems: `left`, padding: `10vw` }}
    >
      <Inner>
        <Intro />
        <PageLinks hide="Home" />
        <Footer />
      </Inner>
    </Content>
  </div>
)

export default Home
