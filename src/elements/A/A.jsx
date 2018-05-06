import React from 'react';

const A = props => {
  return (
    <a className={props.class} href={props.link}>
      {props.text}
    </a>
  );
};

export default A;
