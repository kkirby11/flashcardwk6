import React from 'react';

const styles = {
  link: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',
    marginLeft: '5px',
    marginRight: '5px',
  }
}

const filterLink = (current, name, setFilter) => {
  if (current === name)
    return <span key={name}>{name}</span>
  else
    return <span key={name} style={styles.link} onClick={() => setFilter(name)}>{name}</span>
}

const Footer = ({ filterBy, setFilter }) => (
  <div>
    { 
      ['All', 'Active', 'Complete']
        .map( name => filterLink(filterBy, name, setFilter) )
    }
  </div>
)

export default Footer;