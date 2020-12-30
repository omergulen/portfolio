/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

type PageLinksProps = { hide?: string };

const PageLinks = ({ hide = '' }: PageLinksProps) => {
    const pages = [{
        title: 'Home',
        link: '/'
    },
    {
        title: 'Posts',
        link: 'https://overengineered.pro'
    },
    {
        title: 'Projects',
        link: '/projects/'
    },
    {
        title: 'About',
        link: '/about/'
    },
    {
        title: 'Contact',
        link: 'mailto:omrglen@gmail.com'
    }];

    return (
        <div>
            {pages.filter((page) => {
                return !hide || page.title !== hide;
            }).map((page, index) => {
                const isInternal = page.link[0] === '/';
                const LinkComponent = isInternal ? GatsbyLink : Link;
                const linkProperty = isInternal ? "to" : "href";
                const additionalSx = index !== 0 ? { ml: 3 } : {};
                const props = {
                    [linkProperty]: page.link,
                    ariaLabel: page.title,
                    sx: {
                        fontWeight: `bold`,
                        ...additionalSx
                    }
                };
                return <LinkComponent {...props} >{page.title}</LinkComponent>
            })}
        </div>
    );
}

export default PageLinks;
