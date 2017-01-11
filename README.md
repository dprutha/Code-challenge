# Code-challenge
Node JS code challenge

The app is built using Express framework.

The API takes a search query as a parameter. 
The given CSV file is loaded into an array. Item details are fetched using every item id in the csv file.
The query is looked up in the 'shotDescription field'. Whenever there is a match, the itemid is maintained in an array.

The ideal approach was to use a map to maintain item ids and descriptions, or to add the item detals in the database.
I could not complete it due to time crunch, hence, first went ahead with the rudmentary approach.


To run the app,
> cd Code-challenge
> npm install
> npm run    and    go to localhost:8000/getItems/<searchQuery>
