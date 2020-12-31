/** @jsx jsx */
import { jsx, Flex, Link } from "theme-ui"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Background from "./bg"
// @ts-ignore
import Intro from "../sections/intro"

const Home = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div sx={{ display: `flex`, justifyContent: `center` }}>
    <Background offset={offset} factor={factor} />
    <Content
      sx={{ variant: `texts.bigger` }}
      speed={0.4}
      offset={offset}
      factor={factor}
    >
      <Inner>
        <Intro />
        <Flex
          sx={{
            justifyContent: `left`,
            alignItems: `left`,
            mt: 3,
            color: `primary`,
            fontWeight: `semibold`,
            a: { color: `primary` },
          }}
        >
          <Link
            aria-label="Posts"
            sx={{ fontWeight: `bold` }}
            href="https://overenginereed.pro/"
          >
            Posts
          </Link>
          <Link
            aria-label="GitHub"
            sx={{ ml:3, fontWeight: `bold` }}
            href="https://github.com/omergulen"
          >
            GitHub
          </Link>
          <Link
            aria-label="Twitter"
            sx={{ ml: 3, fontWeight: `bold` }}
            href="https://twitter.com/omergulenn"
          >
            Twitter
          </Link>
          <Link
            aria-label="Superpeer"
            sx={{ ml: 3, fontWeight: `bold` }}
            href="https://superpeer.com/omer"
          >
            Superpeer
          </Link>
          <Link
            aria-label="LinkedIn"
            sx={{ ml: 3, fontWeight: `bold` }}
            href="https://www.linkedin.com/in/omergulen/"
          >
            LinkedIn
          </Link>
          <Link
            aria-label="Dribbble"
            sx={{ ml: 3, fontWeight: `bold` }}
            href="https://dribbble.com/omergulen"
          >
            Dribbble
          </Link>
          <Link
            aria-label="Email"
            sx={{ ml: 3, fontWeight: `bold` }}
            href="mailto:omrglen@gmail.com"
          >
            Email
          </Link>
        </Flex>
      </Inner>
    </Content>
  </div>
)

export default Home
