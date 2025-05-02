import HeaderMadu from "../components/headerMadu.js";
import SobreMadu from "../components/sobreMadu.js";
import PrincipiosMadu from "../components/principiosMadu.js";
import Anuncio from "../components/anuncio.js";
import FooterMadu from "../components/footer-madu.js";
export default function MaduPaiva(){
  return(
    <main>
      <HeaderMadu />
      <SobreMadu />
      <PrincipiosMadu />
      <Anuncio />
      <FooterMadu />
    </main>
  );
}
