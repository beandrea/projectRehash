$(document).ready(function () {

    function pull() {
        var lyrics = localStorage.getItem("lyrics");
        var bio = localStorage.getItem("bio");

        $("#lyric").text(lyrics);
        $("#artist").text(bio);
    }

    $(document).ready(pull);
});