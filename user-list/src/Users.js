const apiUrl = "https://reqres.in/api";

function load(page = 1) {
  const url = `${apiUrl}/users?page=${page}`;

  return (
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API returned status code ${res.status}`);
        }

        return res.json();
      })
      // delete the below '.then' to return entire objects
      //  .then((results) => results.data) // actual data
      .catch((err) => {
        console.warn(err);

        // We have no users to process, return an empty array
        return {
          page: 1,
          total_pages: 1,
          data: [],
        };
      })
  );
}

export default load;
/*
const apiUrl = 'https://reqres.in/api';

function load() {
  const url = `${apiUrl}/users`;

  return fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error(`API returned status code ${res.status}`);
      }

      return res.json();
    })
    .then(results => results.data)
    .catch(err => {
      console.warn(err);

      // We have no users to process, return an empty array
      return [];
    });
}
*/
