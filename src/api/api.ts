export const getData = () => {
  return fetch('https://storedata-project.herokuapp.com/pizzas')
  .then(promise => {
    return promise.json()
      .then(result => {
        return result;
      })
  })
}