var topic = ["Lamborghini","Ferrari", "Bentley", "Ford GT", "Bugatti", "Rolls Royce"]


function renderButtons() {    
    $("#buttonGarage").empty();  

    for (var i = 0; i < topic.length; i++){
      $("#buttonGarage").append(`<button data-${topic[i]}>${topic[i]}`);        
    };
  };

  renderButtons();