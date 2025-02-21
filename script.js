const btn = document.querySelector("button")
const api = "https://api.thecatapi.com/v1/images/search" 

const span = document.querySelector("span")

const comments =[
  "силли",
  "дамми",
  "смарти",
  "умни",
  "злобни"
]

// Запуск Программы
//start()
btn.addEventListener("click", start)


// Нахождение юрл АПИ по айди покемона
async function start() {
  const firstResponse = await fetch(api)
  const firstData = await firstResponse.json()
  showRandComment()

  const imgURL = firstData[0].url
  const body = document.querySelector("body")
  const width = firstData[0].width
  const height = firstData[0].height
  //
  createImg(imgURL,body,height,width)
}

 // img settings
function createImg(url, place,height, width){
let img =  document.querySelector("img") ?? document.createElement("img")


 // let img = document.createElement("img");
  place.prepend(img)
  img.src = url
  img.style.width = width
  img.style.height = height
}

function showRandComment(){
  document.querySelector("h2").style.display = "block"
  let rand = Math.round(Math.random()*(comments.length-1));
  span.innerHTML = comments[rand]
  console.log(rand)
}
