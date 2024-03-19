import '../styles/Card.scss'

function Card({ title, cover, description , images }) {
    return (
      <div className="carte">
        <img src={cover} alt="logement" />
        <div className="conteneur-card">
          <div className="img-card">
        
        <p>{title}</p>
        <span>Voir plus</span>
          </div>
          
        
        
          

        </div>
      </div>
      
    )
  }
  
  
  
  
export default Card