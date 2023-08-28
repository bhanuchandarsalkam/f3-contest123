const button=document.getElementById("btn");
button.addEventListener("click",searchfunction);
function searchfunction(){
const apikey=document.getElementById('apikey').value;
const movie=document.getElementById('movie').value;
if(!movie||!apikey){
    showerror("all the fields are required!");
}
const url=`https://www.omdbapi.com/?s=${movie}&apikey=${apikey}` 
document.getElementById("loader").style.display="block";
fetch(url)
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    document.getElementById("loader").style.display="none";
    if(data.Error){
        showerror(data.Error);
    }
    else{
        display(data.Search);
    }
});
}
function showerror(message){
    document.getElementById("error-message").innerText=message;
}
function display(movies){
const resultdiv=document.getElementById("result");
resultdiv.innerText='';
movies.forEach((movie,index)=>{
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`
    <img id="img" src="${movie.Poster}" alt="${movie.Title}">
    <div class="some">
    <p>${movie.Title}</p>
    <p>${movie.Type}</p>
    <p>${movie.Year}</p>
    <p>${movie.imdbID}</p>
    </div>`
    resultdiv.appendChild(card);
})
}

