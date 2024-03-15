# Instructions

## Part 1: The API Key w/ Giphy

### Mild
0. Use the 'offset' parameter to display the second most trending gif instead of the default first. 
1. Use the random endpoint to finish the second function `getRandom`. _HINT: the random endpoint returns 1 gif. Not an array._
2. Use the search endpoint to finish the third and last function `getSearch` _HINT: use the '&' to have multiple parameters (ex.`?param1=manny&param2=ray`)._
3. If there are no search results, give the user a suitable message.
### Medium
4. Right now the gif buttons replace the current gif. Change it so that there are more gifs added.
5. Create a `style.css` if you haven't already, and style the images so they are consistent heights. Then, use CSS Grid to lay them out in rows of 6.
### Spicy
6. In the `script.js` in the Giphy_Gallery folder, finish the `getGifUrls` function so that it hits the API and returns an array of 24 trending gif urls.
7. Create an numerical input on the page that will change the number of Gifs to be retrieved.
8. Add an input text field on the page. When the user inputs text, display search results instead of the default trending gifs.


## Part 2: Responsive Design

_Note: For this section, you can either use the webpage from Part 1 #4 or Part 1 #6_

- Use media queries at at least 3 different break points. So that your gif grid is fully responsive.
Note: Consider using [Bootstrap's breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/) to determine where yours will go.
- If you're doing the Giphy Gallery, ensure that the title too is responsive.
- When you design responsively 