let videos = [];
let categories = [];
let isAscending = false;
const loadDAta = async (id) => {
  document.getElementById("spinner").classList.remove("hidden");
  const emptyContainer = document.getElementById("empty");
  emptyContainer.innerHTML = "";
  const data = await fetchData(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  videos = data.data;
  document.getElementById("spinner").classList.add("hidden");
  if (videos.length > 0) {
    document.getElementById("sort-by").classList.remove("hidden");
    showVideos(videos);
  } else {
    document.getElementById("sort-by").classList.add("hidden");
    emptyContainer;
    showEmpty();
  }
};

const loadCategories = async (id) => {
  activeId = id;
  if (categories.length == 0) {
    const data = await fetchData(
      "https://openapi.programming-hero.com/api/videos/categories"
    );
    categories = data.data;
  }
  const categoryContainer = document.getElementById("categories-ul");
  categoryContainer.innerHTML = "";
  console.log(id);
  categories?.forEach((category) => {
    console.log(category);
    const div = document.createElement("div");
    div.innerHTML = `
    <li  
    id = ${category.category_id}
    onclick="loadCategories(${category.category_id})"
    class="divide-y divide-dashed  ${
      id == category.category_id
        ? "bg-heroPrimary text-white"
        : "bg-heroGrayLight text-neutral-500"
    } rounded-md">
              <span class="sm:px-4 px-2.5 py-2 ">${category.category}</span>
            </li>`;
    categoryContainer.appendChild(div);
  });
  loadDAta(id);
};

const showEmpty = () => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  const emptyContainer = document.getElementById("empty");
  const div = document.createElement("div");
  div.innerHTML = `  <div class="flex flex-col mt-20 items-center justify-center">
  <img src="svgs/empty.svg" class="h-[140px] w-[140px]" alt="" />
  <h2
    class="mt-8 text-3xl text-center font-bold md:w-[400px] w-[80%] mx-auto"
  >
    Oops!! Sorry, There is no content here
  </h2>
</div>`;
  emptyContainer.appendChild(div);
};
const handleSort = () => {
  isAscending = !isAscending;
  if (!isAscending) {
    document
      .getElementById("sort-container")
      .setAttribute("data-tip", "Highest to Lowest");
  } else {
    document
      .getElementById("sort-container")
      .setAttribute("data-tip", "Lowest to Highest");
  }
  const sortedVideo = sortViews(videos, isAscending);
  showVideos(sortedVideo);
};
const showVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  videos?.forEach((video) => {
    const div = document.createElement("div");
    div.innerHTML = ` <div
    class="h-fit rounded-lg"
  >
  <figure class="w-full min-h-[100px] h-full   sm:h-[200px] relative">
  <img
    src="${video.thumbnail}"
    class="h-full w-full rounded-md"
    alt="product"
  />
  <div
    class="absolute bottom-3 right-3 text-white text-xs bg-[#171717] p-0.5 rounded-md"
  >
  <span> ${
    video?.others?.posted_date && formatTime(video?.others?.posted_date)
  }</span>
  </div>
</figure>
    <div class="flex gap-3 mt-5">
      <div class="w-fit mt-0.5">
        <div class="avatar">
          <div class="w-10  rounded-full">
            <img src=${video?.authors[0].profile_picture} />
          </div>
        </div>
      </div>
      <div class="flex-1">
        <h3
          class="text-neutral-950 max-w-prose line-clamp-2 font-bold text-base "
        >
        ${video.title}
        </h3>
        <div class="flex gap-2  mt-2 mb-2 items-center">
          <p class="text-sm text-heroText">${video?.authors[0].profile_name}</p>
         ${
           video?.authors[0].verified
             ? '<img src="svgs/verified.svg" alt="" />'
             : ""
         }
        </div>
        <p class="text-sm mt-2 text-heroText">${video?.others?.views} views</p>
      </div>
    </div>
  </div>`;
    videoContainer.appendChild(div);
  });
};

loadCategories("1000");