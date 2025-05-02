import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-urbanist',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={urbanist.variable}>
      <Component {...pageProps} />
    </div>
  );
}
