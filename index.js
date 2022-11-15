/*const myStorage = window.localStorage;
const search = document.getElementsByClassName("search_input")[0];
const form = document.getElementsByClassName("form")[0];
const pattern="https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
let url = "https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
let url2 = "https://api.themoviedb.org/3/movie/{id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c";
let main = document.getElementById("main");
const body = document.getElementsByTagName("body")[0];
const button = document.getElementById("search_button");
const input = document.getElementById("search_input");
const reset=document.getElementsByClassName("reset")[0];
const genre=document.getElementById("genre");
const year=document.getElementById("range");
const year_text=document.getElementById("year");
const fav=document.getElementById("fav");
let page=1;
let isFavOpen=false;
document.addEventListener('keypress', (event)=>{
    if(event.code=='Enter' && input.value) {
        button.click();
    }
})
reset.addEventListener("click",()=>{
    input.value="";
    reset.classList.remove("reset_on");
})
search.addEventListener("input",()=>{
    if(input.value) reset.classList.add("reset_on");
    else reset.classList.remove("reset_on");
})
search.addEventListener("focusin", () => {
    form.classList.toggle("form_shadow");
})
search.addEventListener("focusout", () => {
    form.classList.toggle("form_shadow");
})
document.addEventListener("scroll", () => {
    let marker = document.getElementsByClassName("bottom_marker");
    if (marker.length > 0 ? marker[0].getBoundingClientRect().top <= document.documentElement.clientHeight : false) {
        let marker = document.getElementsByClassName("bottom_marker");
        marker[0].classList.remove("bottom_marker");
        lazyShowData();
    }
})
button.addEventListener("click", async ()=>{
        removeAll();
        isFavOpen=false;
        let ind=pattern.indexOf("api_key")+41;
        let url1=pattern.substr(0,ind-1);
        if(genre.value && genre.value.trim()){
            const res = await fetch("https://api.themoviedb.org/3/genre/list?api_key=3fd2be6f0c70a2a598f084ddfb75487c");
            const data = await res.json();
            let a=data.genres;
            let b=12;
            for(let el of a){
                if(genre.value.toLowerCase()===el.name.toLowerCase()) b=el.id;
            }
            url1=url1.concat("&with_genres="+b);
        }
        let y=Number(year.value)+1;
        url1=url1.concat("&primary_release_date.gte="+1960+"-01-01"+"&primary_release_date.lte="+y+"-01-01");
        if (input.value.trim()){
            url1=url1.substring(0, url1.indexOf("discover")).concat("search").concat(url1.substring(url1.indexOf("/movie"))).concat("&query="+input.value.toLowerCase());
            console.log(url1);
        }
        url1=url1.concat("&page=1");
        page=1;
        url=url1;
        let arr=await getData(url1);
        showData(arr);
})
year.addEventListener("input",()=>{
    year_text.textContent=year.value;
})
fav.addEventListener("click",async ()=>{
    removeAll();
    isFavOpen=true;
    let arr=JSON.parse(myStorage.getItem("ids"));
    let prefix=url2.substring(0, url2.indexOf("{id}"));
    let suffix=url2.substring(url2.indexOf("{id}")+4);
    let result=[];
    for(let id of arr){
        const res = await fetch(prefix+id+suffix);
        const data = await res.json();
        result.push(data);
    }
    showData(result);
})
async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
}
    prepare();
async function prepare(){
    let resArr=await getData(url);
    showData(resArr);
    const a=[];
    if (!myStorage.getItem("ids")) myStorage.setItem("ids",JSON.stringify(a));
}

function removeAll() {
    while (main.firstChild) {
        main.firstChild.remove();
    }
}

async function lazyAddData() {
    page++;
    let url1=url.substr(0,url.length-1)+page;
    return getData(url1);
}

async function lazyShowData(){
    let arr=await lazyAddData();
    console.log(arr);
    showData(arr);
}

async function showData(arr){
    for(let i=0; i<arr.length; i++){
        let button=document.createElement("button");
        button.classList.add("add_button");
        button.value=arr[i].id;
        button.textContent=JSON.parse(myStorage.getItem("ids")).includes(String(arr[i].id))?"-":"+";
        button.addEventListener("click",(e)=>{
            let arr=JSON.parse(myStorage.getItem("ids"));
            if(!arr.includes(e.target.value)){
                arr.push(e.target.value);
                button.textContent="-";
            } else if(isFavOpen) {
                arr.splice(arr.indexOf(e.target.value), 1);
                main.removeChild(button.parentNode.parentNode);
            }else{
                arr.splice(arr.indexOf(e.target.value), 1);
                button.textContent="+";
            }
            myStorage.setItem("ids", JSON.stringify(arr));
            console.log(JSON.parse(myStorage.getItem("ids")));
        })
        let rating=document.createElement("span");
        if (arr[i].vote_average<3){
            rating.classList.add("bad");
        }else if(arr[i].vote_average<6){
            rating.classList.add("middle");
        }else{
            rating.classList.add("good");
        }
        rating.textContent=arr[i].vote_average;
        let wr=document.createElement("div");
        wr.classList.add("wr_style");
        wr.appendChild(button);
        wr.appendChild(rating);
        let p=document.createElement("p");
        p.classList.add("name");
        p.textContent=arr[i].title;
        let img=document.createElement("img");
        img.classList.add("preview");
        img.src="https://image.tmdb.org/t/p/original/"+arr[i].poster_path;
        let description=document.createElement("span");
        description.classList.add("description");
        description.textContent=arr[i].overview;
        let wrapperDiv=document.createElement("div");
        wrapperDiv.classList.add("film_block");
        wrapperDiv.appendChild(img);
        wrapperDiv.appendChild(description);
        wrapperDiv.appendChild(p);
        wrapperDiv.appendChild(wr);
        if (i===18){
            wrapperDiv.classList.add("bottom_marker");
            console.log(1111);
        }
        main.appendChild(wrapperDiv);
    }
}*/
const myStorageencoded=window.localStorage;const searchencoded=document.getElementsByClassName("search_input")[0];const formencoded=document.getElementsByClassName("form")[0];const patternencoded="https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";let urlencoded="https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";let url2encoded="https://api.themoviedb.org/3/movie/{id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c";let mainencoded=document.getElementById("main");const bodyencoded=document.getElementsByTagName("body")[0];const buttonencoded=document.getElementById("search_button");const inputencoded=document.getElementById("search_input");const resetencoded=document.getElementsByClassName("reset")[0];const genreencoded=document.getElementById("genre");const yearencoded=document.getElementById("range");const year_textencoded=document.getElementById("year");const favencoded=document.getElementById("fav");let pageencoded=1;let isFavOpenencoded=false;document.addEventListener('keypress',(event)=>{if(event.code=='Enter'&&inputencoded.value){buttonencoded.click();}});resetencoded.addEventListener("click",()=>{inputencoded.value="";resetencoded.classList.remove("reset_on");});searchencoded.addEventListener("input",()=>{if(inputencoded.value)resetencoded.classList.add("reset_on");else resetencoded.classList.remove("reset_on");});searchencoded.addEventListener("focusin",()=>{formencoded.classList.toggle("form_shadow");});searchencoded.addEventListener("focusout",()=>{formencoded.classList.toggle("form_shadow");});document.addEventListener("scroll",()=>{let markerencoded=document.getElementsByClassName("bottom_marker");if(markerencoded.length>0?markerencoded[0].getBoundingClientRect().top<=document.documentElement.clientHeight:false){let markerencoded=document.getElementsByClassName("bottom_marker");markerencoded[0].classList.remove("bottom_marker");lazyShowDataencoded();}});buttonencoded.addEventListener("click",async()=>{removeAllencoded();isFavOpenencoded=false;let indencoded=patternencoded.indexOf("api_key")+41;let url1encoded=patternencoded.substr(0,ind-1);if(genreencoded.value&&genreencoded.value.trim()){const resencoded=await fetch("https://api.themoviedb.org/3/genre/list?api_key=3fd2be6f0c70a2a598f084ddfb75487c");const dataencoded=await resencoded.json();let aencoded=dataencoded.genres;let bencoded=12;for(let elencoded of aencoded){if(genreencoded.value.toLowerCase()===elencoded.name.toLowerCase());bencoded=elencoded.idencoded;}url1encoded=url1encoded.concat("&with_genres="+bencoded);}let yencoded=Number(yearencoded.value)+1;url1encoded=url1encoded.concat("&primary_release_date.gte="+1960+"-01-01"+"&primary_release_date.lte="+yencoded+"-01-01");if(inputencoded.value.trim()){url1encoded=url1encoded.substring(0,url1encoded.indexOf("discover")).concat("search").concat(url1encoded.substring(url1encoded.indexOf("/movie"))).concat("&query="+inputencoded.value.toLowerCase());console.log(url1encoded);}url1encoded=url1encoded.concat("&page=1");pageencoded=1;urlencoded=url1encoded;let arrencoded=await getDataencoded(url1encoded);showDataencoded(arrencoded);});yearencoded.addEventListener("input",()=>{year_textencoded.textContent=yearencoded.value;});favencoded.addEventListener("click",async()=>{removeAllencoded();isFavOpenencoded=true;let arrencoded=JSON.parse(myStorageencoded.getItem("ids"));let prefixencoded=url2encoded.substring(0,url2encoded.indexOf("{id}"));let suffixencoded=url2encoded.substring(url2encoded.indexOf("{id}")+4);let resultencoded=[];for(let idencoded of arrencoded){const resencoded=await fetch(prefixencoded+idencoded+suffixencoded);const dataencoded=await resencoded.json();resultencoded.push(dataencoded);}showDataencoded(resultencoded);});async function getDataencoded(urlencoded){const resencoded=await fetch(urlencoded);const dataencoded=await resencoded.json();return dataencoded.results;}prepareencoded();async function prepareencoded(){let resArrencoded=await getDataencoded(urlencoded);showDataencoded(resArrencoded);const aencoded=[];if(!myStorageencoded.getItem("ids"));myStorageencoded.setItem("ids",JSON.stringify(aencoded));}function removeAllencoded(){while(mainencoded.firstChild){mainencoded.firstChild.remove();}}async function lazyAddDataencoded(){pageencoded++;let url1encoded=urlencoded.substr(0,urlencoded.length-1)+pageencoded;return getDataencoded(url1encoded);}async function lazyShowDataencoded(){let arrencoded=await lazyAddDataencoded();console.log(arrencoded);showDataencoded(arrencoded);}async function showDataencoded(arrencoded){for(let iencoded=0;iencoded<arrencoded.length;iencoded++){let buttonencoded=document.createElement("button");buttonencoded.classList.add("add_button");buttonencoded.value=arrencoded[iencoded].idencoded;buttonencoded.textContent=JSON.parse(myStorageencoded.getItem("ids")).includes(String(arrencoded[iencoded].idencoded))?"-":"+";buttonencoded.addEventListener("click",(e)=>{let arrencoded=JSON.parse(myStorageencoded.getItem("ids"));if(!arrencoded.includes(e.target.value)){arrencoded.push(e.target.value);buttonencoded.textContent="-";}else if(isFavOpenencoded){arrencoded.splice(arrencoded.indexOf(e.target.value),1);mainencoded.removeChild(buttonencoded.parentNode.parentNode);}else{arrencoded.splice(arrencoded.indexOf(e.target.value),1);buttonencoded.textContent="+";}myStorageencoded.setItem("ids",JSON.stringify(arrencoded));console.log(JSON.parse(myStorageencoded.getItem("ids")));});let ratingencoded=document.createElement("span");if(arrencoded[iencoded].vote_average<3){ratingencoded.classList.add("bad");}else if(arrencoded[iencoded].vote_average<6){ratingencoded.classList.add("middle");}else{ratingencoded.classList.add("good");}ratingencoded.textContent=arrencoded[iencoded].vote_average;let wrencoded=document.createElement("div");wrencoded.classList.add("wr_style");wrencoded.appendChild(buttonencoded);wrencoded.appendChild(ratingencoded);let pencoded=document.createElement("p");pencoded.classList.add("name");pencoded.textContent=arrencoded[iencoded].title;let imgencoded=document.createElement("img");imgencoded.classList.add("preview");imgencoded.src="https://image.tmdb.org/t/p/original/"+arrencoded[iencoded].poster_path;let descriptionencoded=document.createElement("span");descriptionencoded.classList.add("description");descriptionencoded.textContent=arrencoded[iencoded].overview;let wrapperDivencoded=document.createElement("div");wrapperDivencoded.classList.add("film_block");wrapperDivencoded.appendChild(imgencoded);wrapperDivencoded.appendChild(descriptionencoded);wrapperDivencoded.appendChild(pencoded);wrapperDivencoded.appendChild(wrencoded);if(iencoded===18){wrapperDivencoded.classList.add("bottom_marker");console.log(1111);}mainencoded.appendChild(wrapperDivencoded);}}

