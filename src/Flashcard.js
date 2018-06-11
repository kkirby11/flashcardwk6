import React from 'react';

const styles = {
  card: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' }
}

const Flashcard = ({ id, name, complete, cardClick }) => (
  <li
    style={ complete ? {...styles.flashcard, ...styles.complete } : styles.flashcard }
    onClick={() => cardClick(id)}
  >
    { name }
  </li>
)

export default Flashcard
