const loadSingleUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => displaySingleUser(data.results[0]));
};
loadSingleUser();

const displaySingleUser = (user) => {
  //   console.log(user);
};

const searchMeal = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals));
};

searchMeal();

const displayMeal = (meals) => {
  //   console.log(meals);
  meals.forEach((meal) => {
    console.log(meal);
  });
};
