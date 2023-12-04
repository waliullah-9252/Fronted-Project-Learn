

let fetchCardData = [];

const fetchApi = () =>{
    handleLoading(true)
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => {
        handleLoading(false)
        showDataToCard(data.data.tools, datalimit)})
}

const categoryShowDate = () =>{
    fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    .then(res => res.json())
    .then(data => {
        // console.log(data.data);
        showCategory(data.data)
    });
}
 const showCategory =(category) => {
    
    const categoryContainer = document.getElementById('categorySection');
    
    category.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button id="btnCategory" onclick="showCard(${category.category_id
        },'btn btn-danger')" class="btn btn-primary">${category.category}</button>`
        categoryContainer.appendChild(div);
    });
 }

const showCard = (id) =>{
    
    
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data.data);
        fetchCardData = data.data;
        showDataToCard(data.data)
    });
}

const showDataToCard = (data) =>{
    console.log("card category",data);
    const cardContainer = document.getElementById('cardSection');
    cardContainer.innerHTML = "";
    if(data.length === 0){
        cardContainer.innerHTML = `<h1 class="text-center">No Data Found</h1>`
    }else{
    cardContainer.innerHTML = "";
    data.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('col-3');
        div.innerHTML = `
        <div class="card mb-3">
            <img height='200px' src="${data?.thumbnail
            }" class="card-img-top" alt="..." />
            <div class="card-body">
                <div class="d-flex gap-2">
                    <img height='20px'
                    width="10px" src="${data?.authors[0]?.profile_picture
                    }" class="" alt="..." />
                    <div>
                    <h5 class="card-title">${data?.title
                    }</h5>
                   <div >
                       <div class="d-flex">
                       <p class="card-text">${data?.authors[0]?.profile_name
                       }</p>
                       <span>
                           ${data?.authors[0]?.verified ? '<i class="fa-solid fa-circle-check" style="color: #0328dd;"></i>':''}
                       </span>
                       </div>
                       <p>${data?.others.views} Views</p>
                   </div>
                    </div>
                </div> 
            </div>
          </div>
        `
        cardContainer.appendChild(div);
    });
   }
    
}

let sortBtn = document.getElementById('sortBtn');
sortBtn.addEventListener('click', () => {
    // console.log(fetchCardData);

    fetchCardData.sort((a, b) => parseInt(b.others.views, 10) - parseInt(a.others.views, 10));

    // console.log("sorted", fetchCardData);
    showDataToCard(fetchCardData);
});

 let handleLoading = (condition) =>{
    let loading = document.getElementById('loadingData');
    
    if(condition){
        loading.classList.remove('d-none');
    }else{
        loading.classList.add('d-none');
    }
    
 }

 function NumToTime(num) { 
    var hours = Math.floor(num / (1000 * 60 * 60));  // Number of milliseconds in an hour
    var remainingMilliseconds = num % (1000 * 60 * 60);  // Remaining milliseconds after calculating hours
    var minutes = Math.floor(remainingMilliseconds / (1000 * 60));  // Convert remaining milliseconds to minutes
    return hours + ":" + minutes;
  }

 console.log("converted time",NumToTime(1672656000)); 

 handleLoading(false);

showCard('1000')
categoryShowDate();
fetchApi();