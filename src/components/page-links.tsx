/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

const PageLinks = () => (
    <div>
        <GatsbyLink
            aria-label="Home"
            sx={{ fontWeight: `bold` }}
            to="/"
        >
            Home
        </GatsbyLink>
        <GatsbyLink
            aria-label="Posts"
            sx={{ ml: 3, fontWeight: `bold` }}
            to="https://overengineered.pro"
        >
            Posts
        </GatsbyLink>
        <GatsbyLink
            aria-label="Projects"
            sx={{ ml: 3, fontWeight: `bold` }}
            to="/projects/"
        >
            Projects
        </GatsbyLink>
        <GatsbyLink
            aria-label="About"
            sx={{ ml: 3, fontWeight: `bold` }}
            to="/about/"
        >
            About
        </GatsbyLink>
        <Link
            aria-label="Contact"
            sx={{ ml: 3, fontWeight: `bold` }}
            href="mailto:omrglen@gmail.com"
        >
            Contact
        </Link>
    </div>
)

export default PageLinks;
