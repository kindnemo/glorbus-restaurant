const contentDiv = document.getElementById('content');

function renderHome (){
    const heroDiv = document.createElement('div');
    const heroDivHeading = document.createElement('div');
    const heroParaOne = document.createElement('p');
    const heroParaTwo = document.createElement('p');
    const heroHeading = document.createElement('h1');
    
    heroParaOne.textContent = "Authentic";
    heroHeading.textContent = "Indian Cuisine";
    heroParaTwo.textContent = "Experience the Essence of India at Glorbus Dining - Where Every Bite Tells a Story!";

    heroDiv.setAttribute("Id", "hero-div");
    heroDivHeading.setAttribute('id', 'hero-div-heading');
    heroDivHeading.setAttribute('class', 'hero-div-para');
    heroParaOne.setAttribute('class', 'hero-para');
    heroParaTwo.setAttribute('class', 'hero-para');
    heroHeading.setAttribute('id', 'hero-heading');    
    
    heroDivHeading.append(heroParaOne, heroHeading, heroParaTwo);
    heroDiv.appendChild(heroDivHeading);
    contentDiv.appendChild(heroDiv);
}
window.onload = renderHome();