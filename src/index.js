console.log('%c HI', 'color: firebrick')

// on page load
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array

document.addEventListener("DOMContentLoaded", function(){
  let images = []
  console.log("pre fetch:", images);
  // debugger
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(ollieImg){
    parsedOllie = ollieImg.json()
    return parsedOllie

  })
  .then(function(parsedOllie){
    parsedOllie.message.forEach(function(element){
      images.push(element)
    })
    console.log(images["0"]);
    return images
  })
  console.log("below async fetch:", images["0"])
  // debugger
  // console.log(images["0"])




  function renderDogs(dog){
    // return `<div><img src=${dog}> </div>`
    return dog
  }

  let dogContainer = document.getElementById("dog-image-container")
  let dogString = ""
  // images.forEach(function(element){
  //   dogString += renderDogs(element)
  // })
  dogContainer.innerHTML = dogString
  console.log(images[0])



})
