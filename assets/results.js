$(document).ready(function () {
    //alert("i'm on one line" + String.fromCharCode(10) + "i'm on the next");
    function pull() {
        var lyrics = localStorage.getItem("lyrics");
        var bio = localStorage.getItem("bio");

        $("#lyric").text(lyrics);
        $("#artist").text(bio);
    }
    
    $(document).ready(pull);

    $("#backBtn").on("click", function() {
        window.location.href = "index.html";
        localStorage.clear();
    })
});