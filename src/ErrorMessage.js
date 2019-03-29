import React from 'react';

export default function ErrorMessage(e) {
  if (e) {
    return (
      <section>
        <h2>Something went wrong</h2>
        <p>{e}</p>
      </section>
    );
  }
}