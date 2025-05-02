import HeaderFlo from "@/components/headerFlorescer";
import SobreFlo from "@/components/sobreFlo";
import Pontos from "@/components/pontos-principais";
import Adquira from "@/components/adquira";
import FooterFlo from "@/components/footer-flo";
export default function Florescer(){
    return(
      <main>
       <HeaderFlo></HeaderFlo>
       <SobreFlo></SobreFlo>
       <Pontos></Pontos>
       <Adquira></Adquira>
       <FooterFlo></FooterFlo>
      </main>  
    );
}