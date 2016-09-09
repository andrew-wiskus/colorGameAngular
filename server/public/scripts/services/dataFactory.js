colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ["red","blue","papayawhip","green"];
  //MARK: Obvi could add some more colors, built dynamically so it wouldnt be hard ;D
  var addColors = ["black", "white", "orange", "yellow"];
  function colorArray(){
    console.log("hi it works");
    return colors
  }

  //for some reason this wants to run twice..
  function addColor(color){
    match = false;
    colors.forEach(function(colored){
      if (colored == color){
        match = true;
      }
    })
    if (match != true){
      colors.push(color);
    }

  }
  return {
    colorArray: colors,
    addColor: addColor,
    newColors: addColors
  }
}]);
