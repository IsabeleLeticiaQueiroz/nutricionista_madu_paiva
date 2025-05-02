import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-urbanist',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={urbanist.variable}>
      <Component {...pageProps} />
    </main>
  );
}
