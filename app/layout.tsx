import { SessionProvider } from 'next-auth/react';
import NavLinks from './NavLinks'
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <SessionProvider>
          <NavLinks />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}