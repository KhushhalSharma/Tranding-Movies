let url = [
  "https://whatsondisneyplus.com/wp-content/uploads/2019/04/Screenshot_2019-04-14-disney_investor-day_2019-pdf.jpg",
  "https://thehollywoodtribune.com/wp-content/uploads/2020/07/Amazon-prime-1024x532.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-amazon-prime-movies-2018-1530887031.jpg",
  "https://149837734.v2.pressablecdn.com/wp-content/uploads/2021/10/Best-Family-Movies-on-Disney-Plus-scaled-1.jpg",
];

let rolling = document.getElementById("rolling");
let img = document.createElement("img");
img.src = url[0];
rolling.append(img);
i = 0;
i++;
setInterval(() => {
  if (i === 4) {
    i = 0;
  }
  img.src = url[i];
  rolling.append(img);
  i++;
}, 1000);

let btn = document.getElementById("btn").addEventListener("click", Mycal);
function Mycal() {
  let url =
    "https://api.themoviedb.org/3/movie/popular?api_key=d0d6510f6755e062a80d885836c5c782";
  async function getData() {
    try {
      let res = await fetch(url);
      let data = await res.json();
      let actualData = data.results;
      display(actualData);
      console.log(actualData);
    } catch (err) {
      console.log(err);
    }
  }
  getData();
}

let imageUrl = "https://image.tmdb.org/t/p/w500";
function display(data) {
  let bigBox = document.getElementById("container");
  bigBox.innerHTML = null;

  data.forEach((el) => {
    let div = document.createElement("div");

    let name = document.createElement("h1");
    name.innerText = `Name: ${el.title}`;

    let release_date = document.createElement("p");
    release_date.innerText = `Release Date: ${el.release_date}`;

    let para = document.createElement("p");
    para.innerText = el.overview;

    let vote_average = document.createElement("h4");
    vote_average.innerText = `Vote: ${el.vote_average}`;

    let poster_path = document.createElement("img");
    poster_path.src = imageUrl + el.poster_path;

    div.append(poster_path, name, release_date, para, vote_average);
    bigBox.append(div);
  });
}
