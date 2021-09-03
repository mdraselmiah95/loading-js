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
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

searchMeal();
