/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"
import Background from "./bg2"

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Background offset={offset} factor={factor} />
  </div>
)

export default Projects
