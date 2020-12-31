/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <Link
            aria-label="GitHub"
            sx={{ fontWeight: `bold` }}
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
    </Box>
  )
}

export default Footer
