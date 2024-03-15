/** Your API key here! */
const API_KEY = "NKwUHMmvMPPsPltUAwfKvrdEUJfGMBbo"



/** API functions */
const getTrending = async ($img) => {
	try {
		// 1. Request a list of trending gifs
		const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&offset=5`)

		// 2. Await parsing the response
		const { data } = await response.json()

		// 3. Attach a URL from the response to the $img element in the DOM
    $img.src = data[0].images.original.url
    
	} catch (error) {
		// If an error occured, display it instead
    const $trendingError = document.querySelector("#trending-error")
		$trendingError.textContent = `Request failed: ${error.message}`
	}
}

const getRandom = async ($randomGif) => {
  // Your Code random_id: 
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const {data} = await response.json();
    $img.src = data.images.original.url;
  } catch (error) {
    const $randomError = document.querySelector("#random-error")
    $randomError.textContent = `Request failed: ${error.message}`
  }

}
const getSearch = async ($img) => {
  const input = document.querySelector('input')
  console.log(input.value)

  // Your Code
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input.value}`);
    const {data} = await response.json();
    $img.src = data[0].images.original.url;
  } catch (error) {
    const $searchError = document.querySelector("#search-error")
    $searchError.textContent = `Request failed: ${error.message}`
  }
}


/** Connect buttons to their gifs */
const $buttons = document.querySelectorAll("button")
const apiMap = {
  'trending': getTrending,
  'random': getRandom,
  'search': getSearch
}
  
$buttons.forEach(($button) => {
  const $img = document.querySelector(`#${$button.value}`)
  $button.addEventListener('click', () => (apiMap[$button.id]($img)));
});
