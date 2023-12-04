let fetchCardData = [];
const fetchApi = () => {
  handleLoading(true);
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      handleLoading(false);
      showDataToCard(data.data.tools, datalimit);
    });
};

const categoryShowDate = () => {
  fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.data);
      showCategory(data.data);
    });
};
const showCategory = (category) => {
  const categoryContainer = document.getElementById("categorySection");

  category.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <button id="btnCategory" onclick="showCard(${category.category_id},'btn btn-danger')" class="btn btn-danger">${category.category}</button>`;
    categoryContainer.appendChild(div);
  });
};

const showCard = (id) => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.data);
      fetchCardData = data.data;
      showDataToCard(data.data);
    });
};

const showDataToCard = (data) => {
  console.log("card category", data);
  const cardContainer = document.getElementById("cardSection");
  cardContainer.innerHTML = "";
  if (data.length === 0) {
    cardContainer.innerHTML = `<img class="w-25 h-25 m-auto mt-4" src="./assets/images/icon.png" alt="">
        <h3 class="text-center fw-bold mt-5">Oops!! Sorry, There is no <br/> content here</h3>
        `;
  } else {
    cardContainer.innerHTML = "";
    data.forEach((data) => {
      const div = document.createElement("div");
      div.classList.add("col-3");
      div.innerHTML = `
      
        <div class="card mb-3">
            <img height='200px' src="${
              data?.thumbnail
            }" class="card-img-top" alt="..." />

            <div class="timeShow">
  ${data?.others?.posted_date !== "" ? `<p class="time-format bg-secondary">${showTimeFormat(data?.others?.posted_date)}</p>` : ""}
</div>


            
            <div class="card-body">
                <div class="d-flex gap-2">
                    <img src="${
                      data?.authors[0]?.profile_picture
                    }" class="image-size" alt="..." />
                    <div>
                    <h6 class="card-title fw-bold">${data?.title}</h6>
                   <div >
                       <div class="d-flex">
                       <p class="card-text">${
                         data?.authors[0]?.profile_name
                       }</p>
                       <span class="check-icon">
                           ${
                             data?.authors[0]?.verified
                               ? '<i class="fa-solid fa-circle-check" style="color: #0328dd;"></i>'
                               : ""
                           }
                       </span>
                       </div>
                       <p>${data?.others.views} Views</p>
                   </div>
                    </div>
                </div> 
            </div>
        </div>
        `;
      cardContainer.appendChild(div);
    });
  }
};

let sortBtn = document.getElementById("sortBtn");
sortBtn.addEventListener("click", () => {
  // console.log(fetchCardData);

  fetchCardData.sort(
    (a, b) => parseInt(b.others.views, 10) - parseInt(a.others.views, 10)
  );

  // console.log("sorted", fetchCardData);
  showDataToCard(fetchCardData);
});

let handleLoading = (condition) => {
  let loading = document.getElementById("loadingData");

  if (condition) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};

function showTimeFormat(seconds) {
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    const hours = Math.floor(seconds / 3600);
    const remainingMinutes = Math.floor((seconds % 3600) / 60);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ${remainingMinutes} ${
      remainingMinutes === 1 ? "minute" : "minutes"
    } ago`;
  }
}

handleLoading(false);

showCard("1000");
categoryShowDate();
fetchApi();
