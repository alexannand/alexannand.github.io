const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement("section");
        let alt = prophets[i].name + " " + prophets[i].lastname + " - " + i;        
        let h2 = document.createElement("h2");
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");
        let image = document.createElement("img");
        let gap = document.createElement("br");
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;       
        birthDate.textContent = "Date of birth: " + prophets[i].birthdate;
        birthPlace.textContent = "Place of birth: " + prophets[i].birthplace;                
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute ("alt", alt);
        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(image);
        card.appendChild(gap);        
        document.querySelector('div.cards').appendChild(card);
    }
  });