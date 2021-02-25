import React from 'react';
import './footer.styles.css';

import { useTheme, useMediaQuery } from '@material-ui/core';

export default function Footer() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div>
      <div
        className="footer"
        style={{
          marginTop: matchesMD ? '3rem' : matchesXS ? '2rem' : '4rem',
          background: '#e0e0e0',
          padding: matchesMD ? '0.5em' : '1em',
        }}
      >
        <h4 className="sehertext">
          All right reserved by{' '}
          <a
            href="https://seher-development.vercel.app/"
            style={{
              textDecoration: 'none',
              textTransform: 'none',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Seher
          </a>
        </h4>
      </div>
    </div>
  );
}
