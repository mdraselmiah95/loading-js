const loadSingleUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => displaySingleUser(data.results[0]));
};
loadSingleUser();

const displaySingleUser = (user) => {
  //   console.log(user);
};

//Random users

//Display meals
const displayMeal = document.getElementById("display-meals");

const searchMeal = (searchMeals) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeals}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

searchMeal("fish");

const displayMeals = (meals) => {
  //   console.log(meals);
  meals.forEach((meal) => {
    console.log(meal);

    const div = document.createElement("div");
    div.innerHTML = `
        <img class="img-fluid border border-1 rounded" src="${meal.strMealThumb}" alt="meal image">
        <h3 class="text-warning">${meal.strMeal}</h3>
        <h4>${meal.strTags}</h4>
        <button class="btn btn-outline-warning mb-3">CLICK ME</button>
      `;
    displayMeal.appendChild(div);
  });
};
