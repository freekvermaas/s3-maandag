import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="grid">
    <h1>Grote nice</h1>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
  );
};

export default Header;