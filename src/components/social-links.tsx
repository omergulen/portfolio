/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

const SocialLinks = () => (
    <div>
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
    </div>
)

export default SocialLinks;
