function apisearch(type, term) {
  return (
    fetch(`https://swapi.co/api/${type}/?search=${term}`)
    .then(res => {if (res.ok) {
      return res.json();
      } else {
      throw new Error(res.statusText)
      }
    })
    .then(res => res.results.map(result => result.name))
  );
}

export default apisearch;