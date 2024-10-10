// src/app/layout.tsx
import './globals.css'; // Make sure this path is correct
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>Portfolio</title>
      <body>
        <Navbar />
        {children}
        
        <Footer /> {/* Add the Footer here */}
      </body>
    </html>
  );
}
