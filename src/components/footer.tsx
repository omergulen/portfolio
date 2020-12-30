/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import SocialLinks from "./social-links"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer" sx={{ left: `calc(50% - 211px)` }}>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <SocialLinks />
      </Flex>
    </Box>
  )
}

export default Footer
