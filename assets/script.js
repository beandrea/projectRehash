function test(data) {
    var header = data.message.header.status_code;

    if (header != 404) {
        var lyrics = data.message.body.lyrics.lyrics_body;
        localStorage.clear();
        localStorage.setItem("lyrics", lyrics);
    } else {
        localStorage.setItem("error", "404");
    }
}

function search() {
    $("#errorText").text("");

    var artist = $("#artist").val();
    var song = $("#song").val();

    if (artist != null && song != null) {
        var apiKey = "1c6fdd4cb29d4a66960f79e845689e9d";
        var querylURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=test&q_track=" +
            song + "&q_artist=" + artist + "&apikey=" + apiKey;

        var scr = $("<script>").attr("src", querylURL);
        $("body").append(scr);


        setTimeout(function () {
            if (localStorage.getItem("error") != "404") {
                apiKey = "00eed5848e963c43bd2cd73c8707c667";
                querylURL = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=" + apiKey + "&format=json";

                $.ajax({
                    url: querylURL,
                    method: "GET"
                }).then(function (response) {
                    var artistInfo = response.artist.bio.summary;
                    localStorage.setItem("bio", artistInfo);
                });

                setTimeout(function () {
                    window.location.href = "./results.html"
                }, 200);
            } else {
                $("#errorText").text("Search terms invalid, please try again");
            }
        }, 200);
    } else {
        $("#errorText").text("Search terms invalid, please try again");
    }
}

$(document).ready(function () {

    $("#search").on("click", search);

    $(document).bind("keypress", function (e) {
        if (e.keyCode == 13) {
            $("#search").trigger("click");
        }
    });


    $(".top-artist-names").on("click", function () {
        var artistName = $(this).text();
        window.location.href = "https://en.wikipedia.org/wiki/" + artistName;
        console.log(artistName);
    });

});