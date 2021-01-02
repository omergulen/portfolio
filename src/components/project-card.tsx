/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { OutboundLink } from "gatsby-plugin-google-analytics"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bgImage: string,
  bgStartColor: string,
  bgEndColor: string,
}

const ProjectCard = ({ link, title, children, bgImage, bgStartColor, bgEndColor }: ProjectCardProps) => {
  const bg = `url("/${bgImage}"), linear-gradient(to right,${bgStartColor} 0%,${bgEndColor} 100%);` || `none`;
  return (<OutboundLink
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      backgroundRepeat: `no-repeat`,
      backgroundPositionX: `110%`,
      backgroundPositionY: `center`,
      backgroundBlendMode: `luminosity`,
      backgroundSize: `contain`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
        backgroundPositionX: `100%`,
      },
    }}
  >
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1
      }}
    >
      {title}
    </div>
  </OutboundLink>);
}

export default ProjectCard
