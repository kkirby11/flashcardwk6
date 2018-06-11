import React from 'react';
import Flashcard from './Flashcard';

const List = ({ name, items, flashcardClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => 
          <Flashcard 
            key={item.id} 
            {...item} 
            flashcardClick={flashcardClick}
          />
        )
      }
    </ul>
  </div>
)

export default List;