import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@jackyzha0/quartz"

export interface FooterLink {
  name: string
  url: string
}

export interface FooterOptions {
  copyright?: string
  links?: FooterLink[]
}

const defaultOptions: Required<FooterOptions> = {
  copyright: `© ${new Date().getFullYear()} Таврида Электрик`,
  links: [],
}

export default ((userOpts?: FooterOptions) => {
  const options = { ...defaultOptions, ...userOpts }

  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`footer-content ${displayClass ?? ""}`}>
        <div class="footer-copyright">
          <p>{options.copyright}</p>
        </div>
        {options.links.length > 0 && (
          <div class="footer-links">
            <ul>
              {options.links.map(({ name, url }) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

  Footer.css = `
    .footer-content {
      margin-top: 2rem;
      padding: 1.5rem 0 0.5rem;
      border-top: 1px solid var(--lightgray);
      font-size: 0.9rem;
      color: var(--darkgray);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
    .footer-copyright p {
      margin: 0;
    }
    .footer-links ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .footer-links li {
      margin: 0;
    }
    .footer-links a {
      color: var(--secondary);
      text-decoration: none;
    }
    .footer-links a:hover {
      color: var(--tertiary);
      text-decoration: underline;
    }
  `

  return Footer
}) satisfies QuartzComponentConstructor<FooterOptions>