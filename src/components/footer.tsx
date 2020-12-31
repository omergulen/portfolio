/** @jsx jsx */
import { Box, useColorMode, jsx } from "theme-ui"

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
      
    </Box>
  )
}

export default Footer
