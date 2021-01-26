/** @jsx jsx */
import { jsx, Flex, Link, useColorMode } from "theme-ui"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import TypeIt from "typeit-react";
import Inner from "../elements/inner"
import Content from "../elements/content"
import Background from "./bg"
// @ts-ignore
import Intro from "../sections/intro"
import Toggle from "./Toggle";
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';

const Home = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <div sx={{ display: `flex`, justifyContent: `center` }}>
      <Background offset={offset} factor={factor} />
      <Content
        sx={{ variant: `texts.bigger` }}
        speed={0.4}
        offset={offset}
        factor={factor}
      >
        <Inner>
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
            }}
            checked={isDark}
            onChange={toggleColorMode}
          />
          <Intro />
          <TypeIt
            element={`p`}
            getBeforeInit={instance => {
              instance
                .pause(1500)
                .delete(26)
                .pause(200)
                .type("developer tools.")
                .pause(1500)
                .delete(16)
                .pause(200)
                .type("test tools.")
                .pause(1500)
                .delete(11)
                .pause(200)
                .type("smart contracts.")
                .pause(1500)
                .delete(25)
                .pause(200)
                .type("automating things.")
                .pause(1500)
                .delete(18)
                .pause(200)
                .type("building bots.")
                .pause(1500)
                .delete(21)
                .pause(200);
              // Remember to return it!
              return instance;
            }}
            options={{
              speed: 100,
              nextStringDelay: 750,
              waitUntilVisible: true,
              startDelete: true,
              loop: true
            }}
          >I love building web & mobile applications.</TypeIt>
          <Flex
            sx={{
              justifyContent: `left`,
              alignItems: `left`,
              mt: 3,
              color: `primary`,
              fontWeight: `semibold`,
              flexWrap: `wrap`,
              a: { color: `primary` },
            }}
          >
            <OutboundLink
              target="_blank"
              rel="noopener"
              aria-label="Posts"
              sx={{ pr: 3, fontWeight: `bold` }}
              href="https://overengineered.pro/"
            >
              Posts
          </OutboundLink>
            <OutboundLink
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              sx={{ pr: 3, fontWeight: `bold` }}
              href="https://github.com/omergulen"
            >
              GitHub
          </OutboundLink>
            <OutboundLink
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
              sx={{ pr: 3, fontWeight: `bold` }}
              href="https://twitter.com/omergulenn"
            >
              Twitter
          </OutboundLink>
            <OutboundLink
              target="_blank"
              rel="noopener"
              aria-label="Superpeer"
              sx={{ pr: 3, fontWeight: `bold` }}
              href="https://superpeer.com/omer"
            >
              Superpeer
          </OutboundLink>
            <OutboundLink
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              sx={{ pr: 3, fontWeight: `bold` }}
              href="https://www.linkedin.com/in/omergulen/"
            >
              LinkedIn
          </OutboundLink>
            <OutboundLink
              target="_blank"
              rel="noopener"
              aria-label="Dribbble"
              sx={{ pr: 3, fontWeight: `bold` }}
              href="https://dribbble.com/omergulen"
            >
              Dribbble
          </OutboundLink>
            <OutboundLink
              target="_blank"
              rel="noopener"
              aria-label="Email"
              sx={{ fontWeight: `bold` }}
              href="mailto:omrglen@gmail.com"
            >
              Email
          </OutboundLink>
          </Flex>
        </Inner>
      </Content>
    </div>
  )
}

export default Home
