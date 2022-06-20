import { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monster, setMonsters] = useState([]);

  fetch('https://jsonplaceholder.typicode.com/users') // any fetch call is a 'side-effect' - therefore we need the useEffect hook
    .then((res) => res.json())
    .then((users) => setMonsters(users));

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = this.state.monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className='App'>
      <h1 className='app-title'>The Monster Squad</h1>
      <SearchBox
        className='monsters-search-box' // className prop == 'search-box' to be passed to other components
        onChange={onSearchChange} // passing props to other components from here | onChange prop = {onSearchChange} event handler
        placeholder='search monsters' // passing props to other components from here | placeholder prop = 'search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };

//     // 3 - componentdidmount method using promises to make API calls and mounts to DOM for rendering
//     // Once component mounts fetch the new users, call setState, then re-render

//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//     // destructured objects in ES6 makes it easier to read and a performance improvement
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     // Filter takes a boolean, return value if monster name includes the search string in the search box
//     // It is not case sensititve so we need a new variable that converts searchField to lowercase
//     );

// }

export default App;
