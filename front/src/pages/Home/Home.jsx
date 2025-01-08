import Navbar from "../../components/Navbar/Navbar"
import PDF from "../../../Assets/curriculoLC.docx.pdf";
import IMG from "../../../Assets/imgLC.png";
import { Link } from "react-router-dom";

import Style from "./Home.module.css";

const Home = () => {
  return (
    <div>
        <Navbar/>

      <div className={Style.titlePrinc}>
          <div>
           <div className={Style.titleName}>
              
              <div>
                <h1>Lucas Cauã</h1>
                <h1>Sabino</h1>
              </div>

              <h2>Desenvolvedor Back-end</h2>
            
            </div>

            <div className={Style.titleCV}>
              <a href={PDF} download="curriculoLC.docx.pdf">Download CV</a>
              <Link to="mailto:lucas_sbn@outlook.com">Entrar em contato</Link>
            </div>

          </div>

          <div>

            <div className={Style.divImg}>
              <img src={IMG}/>
            </div>


          </div>
      </div>

    </div>
  )
}

export default Home