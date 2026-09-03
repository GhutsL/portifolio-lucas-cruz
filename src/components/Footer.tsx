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
  const [copyError, setCopyError] = useState(false);
  const emailAddress = SOCIAL_LINKS.email.url.replace('mailto:', '');

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    setCopyError(false);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        throw new Error('Clipboard API indisponível');
      }
    } catch {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = emailAddress;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        const copiedWithFallback = document.execCommand('copy');
        textArea.remove();

        if (!copiedWithFallback) {
          throw new Error('Não foi possível copiar o e-mail');
        }
      } catch {
        setCopyError(true);
        setTimeout(() => setCopyError(false), 2500);
        return;
      }
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      <button
        onClick={handleCopyEmail}
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
      
      {(copied || copyError) && (
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
          {copied ? 'E-mail copiado! ✓' : 'Não foi possível copiar'}
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
    <footer className="site-footer" id="contato-footer">
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
