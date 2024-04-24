let container = document.querySelector(".container");
let products = document.querySelector(".products")
const data = [
    {
        make:"Apple",
        modle:"Iphone10",
        price:1500,
    },
    {
        make:"Samsung",
        modle:"glaxyA51",
        price:1000,
    },
    {
        make:"Huawei",
        modle:"p50",
        price:900,
    },
    {
        make:"Sony",
        modle:"yy2952",
        price:450,
    },
    {
        make:"Arcas",
        modle:"cobalt50",
        price:550,
    },
    {
        make:"Honor",
        modle:"j9500",
        price:600,
    },
    {
        make:"Xiaomi",
        modle:"Redmi Nut12",
        price:650,
    },
    {
        make:"Nokia",
        modle:"C31",
        price:350,
    },
];


let formSearch = document.querySelector(".formSearch");
let searchResult = data;


formSearch.addEventListener("input", (e)=>{
    products.innerHTML = ""   
    let userSearchWord = e.target.value.toLowerCase();

    searchResult = data.filter((item)=>{
        return item.make.toLowerCase().includes(userSearchWord);
    });
    renderINUI(searchResult, container);

});

function renderINUI(array){
    container.innerHTML = "";
    array.forEach(item => {
        const box =document.createElement("li");
        box.classList.toggle("box");
        box.innerHTML = `<h3>make:${item.make}</h3>
                        <h3>price:${item.price}</h3>
                        <h3>modle:${item.modle}</h3>`
                           
        products.appendChild(box);

    });
   let click = document.querySelector(".search");
   click.addEventListener("click", ()=>{
    document.getElementsByClassName("products")[0].classList.toggle("searchClick");
   });
}
renderINUI(searchResult, container);



let basketForm = document.querySelector(".basketForm");
let signUpButton = document.querySelector(".signUpButton");
signUpButton.addEventListener("click", (e)=>{
 document.getElementsByClassName("signUp")[0].classList.toggle("formSignUp");
 e.preventDefault()
   });

   let sub = document.querySelector("#sub");
   sub.addEventListener("click", (e)=>{
//     let myName = document.querySelector("#myName")
// myName.style.border = "1px solid red"
if(sub){
    alert("با موفقیت ثبت شد")
}
// e.preventDefault()
   })
   