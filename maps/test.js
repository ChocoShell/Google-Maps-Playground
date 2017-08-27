//example
// https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters
// output can be 'json' or 'xml'

/*Required Parameters
    key - API Key
    location - In latitude,longitude format
    radius - in meters.  Can be replaced if rankby=distance
    rankby - if rankby=distance then keyword, name or type must be populated
*/

/*Optional Parameters
    keyword - search term
    name - Equivalent to keyword
    type - Restricts results to one type - https://developers.google.com/places/web-service/supported_types
    ...
    https://developers.google.com/places/web-service/search
*/


https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyDvWJmjG5RB1003dQh2uY9uyXQO-xi57H4

https://maps.googleapis.com/maps/api/place/nearbysearch/json?
location=-33.8670522,151.1957362
radius=500
type=restaurant
keyword=cruise
key=AIzaSyDvWJmjG5RB1003dQh2uY9uyXQO-xi57H4

