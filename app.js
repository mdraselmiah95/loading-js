//Display Random user

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
const spinner = document.getElementById("spinner");
//meal bd
const toggleSpinner = (displayStyle) => {
  spinner.style.display = displayStyle;
};
const toggleSearchResult = (displayStyle) => {
  displayMeal.style.display = displayStyle;
};

const searchMeal = () => {
  const searchText = searchField.value;
  //show spinner
  toggleSpinner("block");
  toggleSearchResult("none");
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
  meals?.forEach((meal) => {
    //optional chancing
    const div = document.createElement("div");
    div.innerHTML = `
        <img class="img-fluid border border-1 rounded" src="${
          meal.strMealThumb
        }" alt="meal image">
        <h3 class="text-warning">${
          meal.strMeal ? meal.strMeal : "not found"
        }</h3>
        <h4>${meal.strCategory ? meal.strCategory : "Not found"}</h4>
        <p class="">${meal.strInstructions.slice(0, 100)}</p>
        <button onclick="loadMealDetails('${
          meal.strMeal
        }')" class="btn btn-outline-warning mb-3">CLICK ME</button>
      `;
    displayMeal.appendChild(div);
  });
  toggleSpinner("none");
  toggleSearchResult("block");
};

const loadMealDetails = (mealName) => {
  console.log(mealName);
};
