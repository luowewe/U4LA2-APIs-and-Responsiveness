const GIFS = 24; // The number of gifs on the page
const API_KEY = "NKwUHMmvMPPsPltUAwfKvrdEUJfGMBbo"


// Return an array of gif urls
const getGifUrls = async (numOfGifs) => {
  /* Your code here! */
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${numOfGifs}&offset=5`);
    const {data} = await response.json();
    return data.map(gifObj => (gifObj.images.original.url))
  } catch (error) {
    const $searchError = document.querySelector("#search-error")
    $searchError.textContent = `Request failed: ${error.message}`
  }
}


// Get urls and match each one with an img element (already done)
const displayImages = async () => {
  const gifUrls = await getGifUrls(GIFS);
  const $gifImages = document.querySelectorAll(".gif");
  
  // Give each img element a gif url
  if( gifUrls.length == GIFS){
    for(let i=0; i<GIFS; i++){
      $gifImages[i].src = gifUrls[i]
    }
  }
}


displayImages();
