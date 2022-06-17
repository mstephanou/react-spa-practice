import { Component } from 'react'
import '../CardList/CardList.styles.css'

class CardList extends Component {
  render() {
    const {monsters} = this.props;
  
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          const {name, email, id} = monster
          
          
        })}
      </div>
    )
  }
}


export default CardList;