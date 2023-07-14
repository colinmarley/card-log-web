import React from 'react';

const css: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  }

export const NotFoundPage: React.FC = () => {
    return (
        <div data-cy="not-found-page" style={css}>
            <h1>Page Not Found</h1>
        </div>
    )
}