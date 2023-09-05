import Navbars from './Components/Navbar/Navbars';
import { Providers } from './Providers';
import './globals.css';
import { Poppins } from 'next/font/google';
import ReduxProvider from './ReduxProvider';

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
          <Navbars />
          <Providers>
            <main>{children}</main>
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
