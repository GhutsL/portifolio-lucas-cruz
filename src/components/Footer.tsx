'use client';

import { SOCIAL_LINKS, FOOTER_TEXT } from '@/data/social-links';
import { GithubIcon, LinkedinIcon, EmailIcon } from './SocialIcons';
import { useState } from 'react';

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialLink = ({ href, ariaLabel, children }: SocialLinkProps) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

const EmailLink = () => {
  const [isHovered, setIsHovered] = useState(false);
  const emailAddress = SOCIAL_LINKS.email.url.replace('mailto:', '');

  return (
    <a
      href={SOCIAL_LINKS.email.url}
      aria-label={SOCIAL_LINKS.email.ariaLabel}
      className="email-link-animated"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`email-icon ${isHovered ? 'hidden' : 'visible'}`}>
        <EmailIcon />
      </span>
      <span className={`email-text ${isHovered ? 'visible' : 'hidden'}`}>
        {emailAddress}
      </span>
    </a>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: <GithubIcon />,
    linkedin: <LinkedinIcon />,
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <nav className="social" aria-label={FOOTER_TEXT.socialLabel}>
          <SocialLink
            href={SOCIAL_LINKS.github.url}
            ariaLabel={SOCIAL_LINKS.github.ariaLabel}
          >
            {socialIcons.github}
          </SocialLink>
          
          <SocialLink
            href={SOCIAL_LINKS.linkedin.url}
            ariaLabel={SOCIAL_LINKS.linkedin.ariaLabel}
          >
            {socialIcons.linkedin}
          </SocialLink>
          
          <EmailLink />
        </nav>
        
        <small>{FOOTER_TEXT.copyright(currentYear)}</small>
      </div>
    </footer>
  );
};
