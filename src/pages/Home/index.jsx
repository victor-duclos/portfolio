import Profil from '../../components/Profil';
import Presentation from '../../components/Presentation';
import CardContact from '../../components/CardContact';
import '../../styles/Home.scss'

const Home = () =>{
    return (
        <div className="styleHome">
            <Profil />
            <div className="welcome-mobile">
            <h2>Bienvenue! Je suis Victor Duclos, développeur web full-stack passionné.</h2>
          </div>
            <div className="bloc-propos">
            <Presentation />
            <CardContact />
            </div>
        </div>
    )
}

export default Home