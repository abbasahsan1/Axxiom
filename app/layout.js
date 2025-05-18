import './globals.css';
import './animations.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Axxiom Software - Your Development Partner for University Projects & More',
  description: 'Axxiom Software offers a wide range of software development services, focusing on university projects, assignments, semester projects, and final year projects (FYPs).',
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
        
        {/* Move client-side script to Next.js Script component with strategy="afterInteractive" */}
        <Script id="form-success-handler" strategy="afterInteractive">
          {`
            if (window.location.search.includes('?submitted=true')) {
              window.history.replaceState(null, null, window.location.pathname + '#contact');
              document.getElementById('form-success').style.display = 'flex';
              document.getElementById('contact-form').style.display = 'none';
            }
          `}
        </Script>
      </body>
    </html>
  );
}
