function searchMenu () {
    let searchInput, filter, mainDiv, div, i;
    searchInput = document.getElementById("searchBar");
    filter = searchInput.value.toUpperCase();
    mainDiv = document.getElementById("mainDiv");
    div = mainDiv.getElementsByClassName("hide_game_wrapper");

    for (i = 0; i < div.length; i++) {
        var searchTags = div[i].getAttribute("data-searchterms").toUpperCase();
        if (searchTags.indexOf(filter) > -1) {
            div[i].style.display="flex";
            } else {
                div[i].style.display="none";
                }
    }
}