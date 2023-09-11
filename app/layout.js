import ReduxProvider from './ReduxProvider';
import { Providers } from './Providers';
import './globals.css';
import { Poppins } from 'next/font/google';
import Navbars from './Components/Navbar/Navbars';
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Fashion',
  description: 'Nepal best fashion store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          <Providers>
            <Navbars />
            <main>{children}</main>
            <Toaster />
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
