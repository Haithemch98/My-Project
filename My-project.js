

function activateSearchNavigator() {
    var searchInput = document.getElementById("searchInput");
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function() {
       var searchQuery = searchInput.value;
        console.log("Search query:", searchQuery);
    });
}