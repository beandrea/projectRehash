var apiKey = "1c6fdd4cb29d4a66960f79e845689e9d";
var querylURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=test&q_track=God's%20Plan&q_artist=Drake&apikey=" + apiKey

function test (data) {
    console.log(data);
}

var scr = $("<script>").attr("src", querylURL);
$("body").append(scr);

var apiKey2 = "00eed5848e963c43bd2cd73c8707c667";
var querylURL2 = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=" + apiKey2 + "&format=json";

$.ajax({
    url: querylURL2,
    method: "GET"
}).then(function (response) {
    console.log(response);
});