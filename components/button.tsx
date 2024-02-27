"use client";

import Link from 'next/link';
import React, { ReactNode, MouseEventHandler } from 'react';

interface NHButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>; // More specific type for click events
    children: ReactNode;
    className?: string;
    href?: string;
}

const NHButton: React.FC<NHButtonProps> = ({ onClick, children, className = '', href }) => {
    const styling = `
    font-montserrat 
    tracking-tighter 
    transition 
    duration-350 
    bg-background
    text-foreground
    mt-2 
    py-2 
    px-5 
    border 
    solid 
    border-foreground 
    cursor-pointer 
    mx-auto 
    mb-12 
    hover:bg-foreground 
    hover:text-background
    ${className}
    `;

    const btnMarkup = (
        <button
            onClick={onClick}
            className={
                styling
            }
            style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: '-.6px',
                borderRadius: '1px',
            }}
        >
            {children}
        </button>
    );

    return href ? (
        <Link href={href} passHref>
            {btnMarkup}
        </Link>
    ) : (
        btnMarkup
    );
}

export default NHButton;