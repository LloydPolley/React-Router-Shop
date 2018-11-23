export const APIData = async () => {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=12"
  );
  return response.json();
};

export const AppState = {
  data: null
};

APIData().then(data => { 
 AppState.data = data;
});

