import React from 'react';
import Link from 'next/link';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link href="/">
                <a className="logo">MindMap</a>
            </Link>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link href="/mindmap">
                            <a>MindMap</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;