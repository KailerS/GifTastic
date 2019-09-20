var topic = ["Lamborghini","Ferrari", "Bentley", "Ford GT", "Bugatti", "Rolls-Royce"]


function renderButtons() {    
    $("#buttonGarage").empty();  

    for (var i = 0; i < topic.length; i++){
      $("#buttonGarage").append(`<button data-name=${topic[i]}>${topic[i]}`);        
    };
};

$("#buttonGarage").on("click", "button", function() {
    var carBrand = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        carBrand + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    console.log(carBrand);
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var carImage = $("<img>");
            carImage.attr("src", results[i].images.fixed_height_still.url);

            gifDiv.prepend(p);
            gifDiv.prepend(carImage);

            $("#parkingLot").prepend(gifDiv);
        }
        console.log(response);
    });
});

  renderButtons();