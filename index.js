const btnEl = document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";
const apiKEY="nwhcfgqhIYNT55zWw3DHPg==mI3Gj992ZeX1KUA0"
const  options={
    method:"GET",
    headers: { 'X-Api-Key': apiKEY},
}

async function getJoke(){
    try{
        jokeEl.innerText="updating.....";
        btnEl.disabled=true;
        btnEl.innerText="Loading";
        const response= await fetch(apiURL,options);
        const data = await response.json();
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";

        jokeEl.innerText=data[0].joke;
        console.log("clicked")

    }catch(error){
        jokeEl.innerText="Error";
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";


    }
    
}






btnEl.addEventListener("click",getJoke);