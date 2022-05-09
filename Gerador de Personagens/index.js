const nome = document.getElementById("name")
const img = document.getElementById("img")
const informacao = document.getElementById("informacao")
async function api() {
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json()
    return data.results
}


function gerar(){
    var number = Math.floor(Math.random()*9)
    var info = api()
    info.then( (result) => {
        nome.innerHTML= result[number].name
        informacao.innerHTML =`Height: ${result[number].height}<br>
        Mass: ${result[number].mass}<br>
        Gender: ${result[number].gender}`
        switch (number){
            case 0:
                img.src = "https://images.unsplash.com/photo-1624467906831-1f80d34ed5ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                break;
            case 1:
                img.src = "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                break;
            case 2:
                img.src = "https://images.unsplash.com/photo-1627962996385-23b017d73cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                break;
            case 3:
                img.src = "https://images.unsplash.com/photo-1638466126232-122d38a572d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                break;
            case 4:
                img.src = "https://images.unsplash.com/photo-1640786406646-a531dbb3f7a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                break;
            case 5:
                img.src = "https://live.staticflickr.com/7351/13036153093_cc14ee175a_k.jpg"
                break;
            case 6:
                img.src = "https://live.staticflickr.com/3374/3410073976_3b861b408a.jpg"
                break;
            case 7:
                img.src = "https://live.staticflickr.com/65535/47632392381_9ca56e7e15.jpg"
                break;
            case 8:
                img.src = "https://live.staticflickr.com/5536/10154214353_3588311027_c.jpg"
                break;
            case 9:
                img.src = "https://images.unsplash.com/photo-1524582642571-404d774f344f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                break;                   
        }
    } )
}

