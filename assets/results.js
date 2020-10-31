$(document).ready(function () {
    $('.carousel').carousel();
});

$(document).ready(function () {

    function pull() {
        var lyrics = localStorage.getItem("lyrics");
        var bio = localStorage.getItem("bio");
        var albums = JSON.parse(localStorage.getItem("albums")).topalbums.album;

        console.log(albums);

        var carousel = $(".carousel");

        for (var i = 0; i < albums.length; i++) {
            var a = $("<a>");
            a.addClass("carousel-item");

            var img = $("<img>");
            img.attr("src", albums[i].image[0]);

            a.append(img);
            carousel.append(a);
        }

        $("#lyric").text(lyrics);
        $("#artist").text(bio);
    }

    $(document).ready(pull);

    $("#backBtn").on("click", function () {
        window.location.href = "index.html";
        localStorage.clear();
    })
});