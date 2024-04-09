 /*constant name btnEl and method called document.getElementById("btn")*/
 const btnEl = document.getElementById("btn")
 /* const colled jokeEl and method colled document.getElementById("joke") */ 
 const jokeEl = document.getElementById("joke")

 const apiKey = "54Rfh0odvB4k7/fc1wYsnQ==7MJjpz7X9uUUqTTA";

 const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

 const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit="

 /*function */
 async function getJoke(){
    try { 
         /*up dating */
    joke.innerText = "Updatiing...";
    btnEl.desabled = true;
    btnEl.innerText = "loading..."
 const response = await fetch(apiURL, options)
 /*to plint the date in the app  */
 const data = await response.json();
/*to button ask for joke again*/
 btnEl.desabled = false;
 btnEl.innerText = "tell me a joke"

 jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        joke.innerText = "error happened, try again later ...";
        btnEl.desabled = false;
        btnEl.innerText = "tell me a joke"

       console.log(error) 
    }

  
}


/*event listenen */
 btnEl.addEventListener("click", getJoke)