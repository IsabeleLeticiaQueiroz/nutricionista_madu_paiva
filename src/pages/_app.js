import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Urbanist } from 'next/font/google';

// css
import '../styles/footer-madu.css';
import '../styles/footer-flo.css';
import '../styles/adquira-flo.css';
import '../styles/anuncio-madu.css';
import '../styles/header-flo.css';
import '../styles/header-madu.css';
import '../styles/pontos-flo.css';
import '../styles/principios-madu.css';
import '../styles/sobre-flo.css';
import '../styles/sobre-madu.css';


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
