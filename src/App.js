import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json(res))
      .then(users => this.setState({ monsters: users}))
  }


  /*
  Aggiungere nel costruttore this.handleChange = this.handleChange.bind(this); per questa forma
  handleChange(e){
    this.setState({ searchField: e.target.value})
  }
  altrimenti usare arrow function
  */
  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render(){

    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">    
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search monsters'
          handleChange={this.handleChange}
        />  
        <CardList monsters={filteredMonster}/>        
      </div>      
    );
  }
}

export default App;
