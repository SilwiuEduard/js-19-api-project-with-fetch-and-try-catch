const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", async () => {
  FetchDadJoke();
});

const FetchDadJoke = async () => {
  try {
    result.textContent = "Loading...";
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Learning API app",
      },
    });
    // console.log(response) // propriety OK: false, if is not OK the link
    if (!response.ok) {
      throw new Error("...error");
    }
    const data = await response.json();
    // console.log(data) //If the link is broken (error 404) - at least this API provide us infos about the error: The requested URL was not found in the server.
    result.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    result.innerHTML = "There was an error...";
  }
};

FetchDadJoke();
