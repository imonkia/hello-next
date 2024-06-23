'use client';
import React from 'react';

export default function Censored ({ children }) {
  const [ isCensored, setIsCensored ] = React.useState(false);

	return (
			<button className={isCensored ? "censored": undefined} onClick={() => setIsCensored(!isCensored)}>{children}</button>
	);
};