// alert("Hello world!");

//selector html file by javascript
var h1 = document.getElementsByTagName("h1");
// console.log(h1);

var title = document.getElementById("title").style.color = "red";

// document.getElementById("title").style.removeProperty("color");
// console.log(title);

// var child = document.querySelectorAll(".child");
// console.log(child);

var child = document.getElementsByClassName("child");
// console.log(child[0]);

var img = document.getElementById("img");
// console.log(img.getAttribute("src"));
img.setAttribute("alt","profile Picture");

img.classList.add("testClass");
// console.log(img);

var hero = document.getElementById("hero");
// console.log(hero.innerText);

var input = document.getElementById("input");
// console.log(input.value);

var parent = document.getElementById("parent").innerHTML;
// console.log(parent);

var testDiv = document.getElementsByClassName("test");
// console.log(testDiv[0].childNodes[1].parentNode.parentNode.parentNode.childNodes[3]);

var newDiv = document.getElementById("newDiv");

function createEl(){
    var p = document.createElement("p");
    p.innerText = "natun ami";
    newDiv.append(p)
}

// createEl();

//add even listeners methods 
document.getElementById("click-btn").addEventListener("click", function(e) {
    // console.log("Yess Bosss");
    createEl();
})

// document.getElementById("click-btn").addEventListener("click", function(e) {
//     var inputValue = document.getElementById("input").value;
//     console.log(inputValue);
// })

function clickHere(e){
    var inputValue = document.getElementById("input").value;
    console.log(inputValue);
}

// document.getElementById("input").addEventListener("blur", function(e) {
//     console.log(e.target.value);
// })

function inputChange(e) {
    console.log("hello");
}

