import Profil from '../../components/Profil';
import Presentation from '../../components/Presentation';
import '../../styles/Home.scss'

const Home = () =>{
    return (
        <div className="styleHome">
            <Profil />
            <Presentation />
        </div>
    )
}

export default Home