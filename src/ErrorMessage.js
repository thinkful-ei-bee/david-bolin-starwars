import React from 'react';

export default function ErrorMessage(props) {
  if (props.message) {
    return (
      <section>
        <h2>Something went wrong</h2>
        <p>{props.message}</p>
      </section>
    );
  } else {
    return '';
  }
}