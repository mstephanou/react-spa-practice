import '../CardList/CardList.styles.css'
import Card from '../Card/Card';


const CardList = ({monsters}) => { // monsters prop is destructured right into the parameter itself
// implicit return example
      <div className='card-list'>
        {monsters.map((monster) => {
          return (
            <Card monster={monster}/>
          )          
        })}
      </div>
    
  }



export default CardList;