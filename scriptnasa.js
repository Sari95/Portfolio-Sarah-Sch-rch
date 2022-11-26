let searchButton = document.querySelector("#search");

//Add an event listenere to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API
async function sendApiRequest() {
  let API_Key = "VQUgrXVDdP1bSJfkwcS7eB3rjQ69r2iGi55BAZEP";
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_Key}`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useAPIData(data);
}

//function that does something with the data received from the API.
function useAPIData(data) {
  document.querySelector("#content").innerHTML += `<img src="${data.url}">`;
  document.querySelector("#content").innerHTML += data.explanation;
  image.style.margin = "0 auto";
}
