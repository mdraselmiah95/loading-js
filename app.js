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
const searchField = document.getElementById("search-field");
const displayMeal = document.getElementById("display-meals");
const mealDetails = document.getElementById("meal-details");

//meal bd

const searchMeal = () => {
  const searchText = searchField.value;
  console.log(searchText);
  loadMeals(searchText);
  searchField.value = "";
};

const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  displayMeal.textContent = "";
  meals.forEach((meal) => {
    console.log(meal);

    const div = document.createElement("div");
    div.innerHTML = `
        <img class="img-fluid border border-1 rounded" src="${
          meal.strMealThumb
        }" alt="meal image">
        <h3 class="text-warning">${meal.strMeal}</h3>
        <h4>${meal.strTags ? meal.strMeal : "Not found"}</h4>
        <button onclick="loadMealDetails('${
          meal.strMeal
        }')" class="btn btn-outline-warning mb-3">CLICK ME</button>
      `;
    displayMeal.appendChild(div);
  });
};

const loadMealDetails = (mealName) => {
  console.log(mealName);
};
