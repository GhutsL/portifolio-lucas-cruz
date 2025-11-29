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
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const emailAddress = SOCIAL_LINKS.email.url.replace('mailto:', '');

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar e-mail:', err);
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      <button
        onClick={handleCopyEmail}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Copiar e-mail para área de transferência"
        className="email-link-animated"
      >
        <span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          minWidth: '44px',
          height: '44px'
        }}>
          <EmailIcon />
        </span>
        <span className="email-text">{emailAddress}</span>
      </button>
      
      {copied && (
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 200, 255, 0.95)',
            color: '#000',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 20px rgba(0, 200, 255, 0.4)',
            animation: 'fadeIn 0.2s ease-out',
            zIndex: 1000,
          }}
        >
          E-mail copiado! ✓
        </div>
      )}
    </div>
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
