$(document).ready(function() {

  $("#userInput").submit(function(event) {
    event.preventDefault();
    var inputString = $("#inputString").val();

    var clearString = inputString.replace(/[^a-zA-Z]/g, "");
    var clearStringLength = clearString.length;
    var numberOfRows = Math.ceil(Math.sqrt(clearStringLength));
    var numberOfColumns = Math.floor(Math.sqrt(clearStringLength));
    var arrayOfRows = [];
    var outputArray = [];
    var finalString = "";
    var outputString = "";
    //console.log(numberOfColumns);
    //console.log(numberOfRows);

    var characters = clearString.split("");
    //console.log(characters.length);

    for (index = 0; index < numberOfRows; index ++) {
      var newArray = [];
      arrayOfRows.push(newArray);
    }
    if (((numberOfColumns * numberOfColumns) + numberOfColumns) < characters.length) {
      numberOfColumns++;
    }

    for (var index = 0; index < numberOfRows; index++) {
      for (var j = index * numberOfColumns; j < numberOfColumns * (index + 1); j++) {
        arrayOfRows[index].push(characters[j]);
      }
    }
    console.log(arrayOfRows);

    for (var index = 0; index < arrayOfRows.length; index++) {
      for (var j = 0; j < arrayOfRows.length; j++) {
        var letter = arrayOfRows[j];
        outputArray.push(letter[index]);
        // outputArray.push(arrayOfRows[index]);
      }
    }
    for (var index = 0; index < outputArray.length; index ++) {
      finalString = finalString.concat(outputArray[index]);
    }

    for (var index = 0; index < finalString.length; index ++) {
      outputString = outputString.concat(finalString.slice((numberOfColumns * index), (numberOfColumns * (index + 1))) + " ");
    }
    console.log(outputArray);
  })

})
