//start of inspirational quote fetch

let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'

fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {

    document.querySelector("#insp").innerHTML = '“' + data.quoteText + '”'
    document.querySelector("#inspAuthor").innerHTML = '-' + data.quoteAuthor
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });

//end of inspirational quote 

//start of Lorem ipsum generator

loremFunction = function () {

  let pNumber = document.querySelector('.paragraph').value
  let pLen = document.querySelector('#pLength').elements['pLength'].value
  let loremLink = ''
  let loremUl = ''
  let loremOl = ''
  let loremDl = ''
  let loremBq = ''
  let loremCode = ''
  let loremHead = ''
  let loremAllCaps = ''
  let loremPrude = ''
  let loremPlain = ''

  if (document.querySelector('#link').checked) {
    loremLink = 'link/'
  }
  if (document.querySelector('#ul').checked) {
    loremUl = 'ul/'
  }
  if (document.querySelector('#ol').checked) {
    loremOl = 'ol/'
  }
  if (document.querySelector('#dl').checked) {
    loremDl = 'dl/'
  }
  if (document.querySelector('#bq').checked) {
    loremBq = 'bq/'
  }
  if (document.querySelector('#code').checked) {
    loremCode = 'code/'
  }
  if (document.querySelector('#loremHead').checked) {
    loremHead = 'headers/'
  }
  if (document.querySelector('#allCaps').checked) {
    loremAllCaps = 'allcaps/'
  }
  if (document.querySelector('#prude').checked) {
    loremPrude = 'prude/'
  }



  let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://loripsum.net/api/' + pLen + '/' + pNumber + '/' + loremLink + loremUl + loremOl + loremDl + loremBq + loremCode + loremHead +
    loremAllCaps + loremPrude
  // console.log(targetUrl)
  fetch(proxyUrl + targetUrl)
    .then(blob => blob.text())
    .then(data => {

      document.querySelector('#lorem').innerHTML = data
      return data
    })
    .catch(e => {
      console.log(e);
      return e;
    });
}

//end of Lorem ipsum generator


//start of Goat placeholde functon

goatFunction = function () {
  if (document.querySelector('#goatImg')) {
    document.querySelector('#goatImg').remove()
  }

  let gWidth = document.querySelector('#gWidth').value
  let gHeight = document.querySelector('#gHeight').value

  let goatImg = document.createElement('img')
  let goatSRC = 'http://placegoat.com/' + gWidth + '/' + gHeight

  goatImg.setAttribute('src', goatSRC)
  goatImg.setAttribute('id', 'goatImg')
  document.querySelector('#gImg').appendChild(goatImg)
}

//end of Goat placeholder function

//start of Cat placeholder fetch function

catFunction = function () {
  if (document.querySelector('#catImg')) {
    document.querySelector('#catImg').remove()
  }

  fetch('https://aws.random.cat/meow')
    .then(blob2 => blob2.json())
    .then(data2 => {
      let catImg = document.createElement('img')
      let catSRC = data2.file
      catImg.setAttribute('src', catSRC)
      catImg.setAttribute('id', 'catImg')
      document.querySelector('#cImg').appendChild(catImg)

      return data2;
    })

}

//end of Cat placeholder fetch function 

//start of webstorage function change and remember background color


let nameStore = localStorage.getItem('name')

if (nameStore === null) {
  let name = prompt('Enter your name')
  localStorage.setItem('name', name)
}
nameFunction = function () {

  document.querySelector('#wName').innerText = 'Welcome ' + nameStore + ' to Dev Helper!'

}



window.onload = nameFunction

// 

// window.onload = nameFunction
//end of webstorage function

//start of cities from avancera fetch funcction

citiesFunction = function () {
  document.querySelector('#apiDisp').innerHTML = ''
  fetch('https://avancera.app/cities/')
    .then(blob => blob.json())
    .then(data => {

      Object.keys(data).forEach(function (key) {

        let h3 = document.createElement('h3')
        h3.setAttribute('id', 'apiCity' + [key])

        let pPop = document.createElement('div')
        pPop.setAttribute('id', 'cPop' + [key])

        let cId = document.createElement('div')
        cId.setAttribute('id', 'cId' + [key])

        document.querySelector('#apiDisp').appendChild(h3)
        document.querySelector('#apiDisp').appendChild(pPop)
        document.querySelector('#apiDisp').appendChild(cId)
        document.querySelector('#apiCity' + [key]).innerHTML = data[key].name
        document.querySelector('#cPop' + [key]).innerHTML = 'Population: ' + data[key].population
        document.querySelector('#cId' + [key]).innerHTML = 'ID: ' + data[key].id + '<br><hr>'
      });
    })
}

let cityId = document.createElement('input')
cityId.setAttribute('type', 'text')
cityId.setAttribute('id', 'cityId')

let cityName = document.createElement('input')
cityName.setAttribute('type', 'text')
cityName.setAttribute('id', 'cityName')

let cityPop = document.createElement('input')
cityPop.setAttribute('type', 'text')
cityPop.setAttribute('id', 'cityPop')

let subBtn = document.createElement('input')
subBtn.setAttribute('class', 'btn-primary')
subBtn.setAttribute('id', 'subBtn')
subBtn.setAttribute('value', 'Submit')
subBtn.setAttribute('type', 'button')
subBtn.setAttribute('onclick', 'submitFunction()')

let br = document.createElement('br')
let nameP = document.createElement('div')
nameP.innerText = 'Name :'

let popP = document.createElement('div')
popP.innerText = 'Population :'

let idP = document.createElement('div')
idP.innerText = 'ID :'

addCityFunction = function () {
  document.querySelector('#cityMod').innerHTML = ''
  document.querySelector('#cityMod').appendChild(nameP)
  document.querySelector('#cityMod').appendChild(cityName)
  document.querySelector('#cityMod').appendChild(popP)
  document.querySelector('#cityMod').appendChild(cityPop)
  document.querySelector('#cityMod').appendChild(br)
  document.querySelector('#cityMod').appendChild(subBtn)

  submitFunction = function () {
    document.querySelector('#apiDisp').innerHTML = ''
    let name = document.querySelector('#cityName').value
    let pop = document.querySelector('#cityPop').value
    if (name || pop !== '') {
      fetch('https://avancera.app/cities/', {
        body: JSON.stringify({
          name: name,
          population: pop
        }),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
      document.querySelector('#cityMod').innerHTML = ''
    }
    setTimeout(timeoutFunktion, 500)
  }

}

timeoutFunktion = function () {
  fetch('https://avancera.app/cities/')
    .then(blob => blob.json())
    .then(data => {

      data.reverse()

      let h3 = document.createElement('h3')
      h3.setAttribute('id', 'apiCity')

      let pPop = document.createElement('div')
      pPop.setAttribute('id', 'cPop')

      let cId = document.createElement('div')
      cId.setAttribute('id', 'cId')

      document.querySelector('#apiDisp').appendChild(h3)
      document.querySelector('#apiDisp').appendChild(pPop)
      document.querySelector('#apiDisp').appendChild(cId)
      document.querySelector('#apiCity').innerHTML = data[0].name
      document.querySelector('#cPop').innerHTML = 'Population: ' + data[0].population
      document.querySelector('#cId').innerHTML = 'ID: ' + data[0].id + '<br><hr>'
    })

}

modifyCityFunction = function () {
  document.querySelector('#cityMod').innerHTML = ''
  document.querySelector('#cityMod').appendChild(idP)
  document.querySelector('#cityMod').appendChild(cityId)
  document.querySelector('#cityMod').appendChild(nameP)
  document.querySelector('#cityMod').appendChild(cityName)
  document.querySelector('#cityMod').appendChild(popP)
  document.querySelector('#cityMod').appendChild(cityPop)
  document.querySelector('#cityMod').appendChild(br)
  document.querySelector('#cityMod').appendChild(subBtn)

  submitFunction = function () {

    let name = document.querySelector('#cityName').value
    let pop = document.querySelector('#cityPop').value
    let id = document.querySelector('#cityId').value
    if (id || name || pop !== '') {
      fetch('https://avancera.app/cities/' + id, {
          body: JSON.stringify({
            name: name,
            population: pop
          }),
          headers: {
            'content-type': 'application/json'
          },
          method: 'put'
        })
        .then(response => response.json())
        .then(data => {

          document.querySelector('#apiDisp').innerHTML = ''
          let h3 = document.createElement('h3')
          h3.setAttribute('id', 'apiCity')

          let pPop = document.createElement('div')
          pPop.setAttribute('id', 'cPop')

          let cId = document.createElement('div')
          cId.setAttribute('id', 'cId')

          document.querySelector('#apiDisp').appendChild(h3)
          document.querySelector('#apiDisp').appendChild(pPop)
          document.querySelector('#apiDisp').appendChild(cId)
          document.querySelector('#apiCity').innerHTML = data.name
          document.querySelector('#cPop').innerHTML = 'Population: ' + data.population
          document.querySelector('#cId').innerHTML = 'ID: ' + data.id + '<br><hr>'
        })
    }
    document.querySelector('#cityMod').innerHTML = ''
    // setTimeout("location.reload(true);", 500)
  }

  // fixa så att funktion visar enbart ändrade stade 
}

removeCityFunction = function () {
  document.querySelector('#cityMod').innerHTML = ''
  document.querySelector('#cityMod').appendChild(idP)
  document.querySelector('#cityMod').appendChild(cityId)
  document.querySelector('#cityMod').appendChild(br)
  document.querySelector('#cityMod').appendChild(subBtn)

  submitFunction = function () {

    let id = document.querySelector('#cityId').value
    if (id !== '') {
      fetch('https://avancera.app/cities/' + id, {
        method: 'delete'
      })
      document.querySelector('#cityMod').innerHTML = ''
      setTimeout("location.reload(true);", 500)
    }
  }
  // fixa så att funktionen visar hela listan 
}

clearCityFunction = function () {
  document.querySelector('#cityMod').innerHTML = ''
}
//end of cities from avancera fetch funcction

// Dessutom ska ett webbgränssnitt som kan visa, lägga till, redigera, och ta bort städer

if (nameStore === null) {
  location.reload(true)

}