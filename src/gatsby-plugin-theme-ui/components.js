import React from "react"
import ProjectCard from "../components/project-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bgImage, bgStartColor, bgEndColor, children }) => (
    <ProjectCard link={link} title={title} bgImage={bgImage} bgStartColor={bgStartColor} bgEndColor={bgEndColor}>
      {children}
    </ProjectCard>
  ),
}

export default components
