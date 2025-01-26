const contentDiv = document.getElementById('content');
const HomeBtn = document.getElementById('home');

function renderHome (){
    contentDiv.innerHTML = "";  //To clean the content div before appending
    const heroDiv = document.createElement('div');
    const heroDivHeading = document.createElement('div');
    const heroParaOne = document.createElement('p');
    const heroParaTwo = document.createElement('p');
    const heroHeading = document.createElement('h1');
    const exploreBtn = document.createElement('button');
    
    heroParaOne.textContent = "Authentic";
    heroHeading.textContent = "Indian Cuisine";
    heroParaTwo.textContent = "Experience the Essence of India at Glorbus Dining - Where Every Bite Tells a Story!";
    exploreBtn.textContent = "Explore";

    heroDiv.setAttribute("id", "hero-div");
    heroDivHeading.setAttribute('id', 'hero-div-heading');
    heroDivHeading.setAttribute('class', 'hero-div-para');
    heroParaOne.setAttribute('class', 'hero-para');
    heroParaTwo.setAttribute('class', 'hero-para');
    heroHeading.setAttribute('id', 'hero-heading');
    exploreBtn.setAttribute("id", "explore-Btn");
    
    heroDivHeading.append(heroParaOne, heroHeading, heroParaTwo);
    heroDiv.appendChild(heroDivHeading);
    heroDivHeading.appendChild(exploreBtn);
    contentDiv.appendChild(heroDiv);
}
window.onload = renderHome;
HomeBtn.onclick = renderHome;