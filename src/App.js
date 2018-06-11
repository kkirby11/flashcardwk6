import React, { Component } from 'react';
import List from './List';
import FlashcardForm from './FlashcardForm';
import Footer from './Footer';
import Clock from './Clock';
import './App.css';
 
class App extends Component {
  state = {
    flashcards: [],
    id: 0,
    filterBy: 'All',
    showClock: true,
  }

  toggleClock = () => {
    this.setState({ showClock: !this.state.showClock })
  }

  addItem = (name) => {
    const { flashcards, id } = this.state;
    const flashcard = { name, complete: false, id }
    this.setState({ 
      flashcards: [flashcard, ...flashcards], 
      id: id + 1,
    })
  }

  doMath = (x,y) => {
    console.log(x + y)
  }

  handleClick = (id) => {
    const { flashcards } = this.state;
    this.setState({
      flashcards: flashcards.map( flashcard => {
        if (flashcard.id === id) {
          return {
            ...flashcard,
            complete: !flashcard.complete
          }
        }

        return flashcard
      })
    })
  }

  setFilter = (filterBy) => {
    this.setState({ filterBy })
  }

  visibleItems = () => {
    const { flashcards, filterBy } = this.state;
    switch(filterBy) {
      case 'Active':
        return flashcards.filter( t => !t.complete )
      case 'Complete':
        return flashcards.filter( t => t.complete )
      default:
        return flashcards
    }
  }
  
  render() {
    const { flashcards, filterBy, showClock} = this.state

    return (
      

      <div>
        { showClock && <Clock /> }
        <button onClick={this.toggleClock}>Toggle Clock</button>
        <FlashcardForm zebra={this.doMath} addItem={this.addItem} />
        <List 
          name="Flashcard List" 
          items={this.visibleItems()} 
          flashcardClick={this.handleClick}
        />
       
      </div>
    );
  }
}

export default App;


