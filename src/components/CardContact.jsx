import "../styles/CardContact.scss";
import { Link } from 'react-router-dom'

const CardContact= ()=>{


    return(
        <div className="cardContact">
            <div className="conteneur-cardContact">
            <img className="img-contact" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Ftransfer.webp?alt=media&token=7095709b-5b58-4924-84a3-7dede335ad0d"
            alt="logo contacter" />
            <p>Pour tout renseignement, contactez-moi:</p>
            <p>Par mail: victor_duclos@yahoo.fr</p>
            <p>Par téléphone: 06.32.12.09.83</p>
            <p>Retrouvez-moi également sur:</p>
            <div className="logo-contain">
            <Link to="https://www.linkedin.com/in/victor-duclos-33ab372bb/">
                <img className="logoContact" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fsocial.webp?alt=media&token=18e0e680-2701-4a70-a8a8-9790f9556a79"
                alt="linkedin" />
            </Link>
            <Link to="https://github.com/victor-duclos">
                <img className="logoContact" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fgithub-icon.webp?alt=media&token=754725c9-1920-40aa-9d51-bdb6ab62bf45"
                alt="github"/>
            </Link>
            </div>
            </div>
        </div>
    )
}

export default CardContact;