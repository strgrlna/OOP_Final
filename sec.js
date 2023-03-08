function buttonEnter(){
    var strMeal = document.getElementById("mealInput").value //get the search value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data) //output the API into console.
      console.log(" Greece Meal: " + data.meals[0].strMeal)
      console.log(" Greece Meal Category: " + data.meals[0].strCategory)
      console.log(" Greece Meal Instructions: " + data.meals[0].strInstructions)

      //output the API into HTML page
      document.getElementById("display1").innerHTML = "Name: " + data.meals[0].strMeal
      document.getElementById("display2").innerHTML = "Category: " + data.meals[0].strCategory
      document.getElementById("display3").innerHTML = "Ingredients: " + data.meals[0].strIngredient1 + "," + data.meals[0].strIngredient2 + "," + data.meals[0].strIngredient3 + "," + data.meals[0].strIngredient4 + "," + data.meals[0].strIngredient5 + "," + data.meals[0].strIngredient6 + "," + data.meals[0].strIngredient7 + "," + data.meals[0].strIngredient8 + "," + data.meals[0].strIngredient9 + "," + data.meals[0].strIngredient10 + "," + data.meals[0].strIngredient11
      document.getElementById("display4").innerHTML = "Instructions: " + data.meals[0].strInstructions
      document.getElementById("display5").innerHTML = "Youtube link: " + data.meals[0].strYoutube
      document.getElementById("display6").src = data.meals[0].strMealThumb
    })
}