import React from 'react';

export default function List(props) {
  return <ul>{props.listElement.map(i => <li>{i}</li>)}</ul>;
}
