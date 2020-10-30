var apiKey = "1c6fdd4cb29d4a66960f79e845689e9d";
var querylURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=God's%20Plan&q_artist=Drake&apikey=" + apiKey

$.ajax({
    url: querylURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});