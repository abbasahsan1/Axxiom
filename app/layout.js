import './globals.css';
import './animations.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Axiom Software - Your Development Partner for University Projects & More',
  description: 'Axiom Software offers a wide range of software development services, focusing on university projects, assignments, semester projects, and final year projects (FYPs).',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Didot:wght@400;700&display=swap" />
      </head>
      <body className={`${inter.variable} font-sans transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
