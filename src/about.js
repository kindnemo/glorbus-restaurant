const contentDiv = document.getElementById('content');
const AboutUs = document.getElementById("about");

function renderAbout (){
    contentDiv.innerHTML = ""; //To clean the content div before appending
    
    const aboutDiv = document.createElement("div");
    const glorbus = document.createElement("h1");
    const aboutParaOne = document.createElement("p");
    const aboutParaTwo = document.createElement("p");
    const paraContainer = document.createElement("div");

    glorbus.innerText = "Glorbus Restaurant";
    
    aboutParaOne.innerText = "Nestled in the heart of Lucknow, Glorbus Restaurant has been a cherished culinary gem since 1985. We take immense pride in serving authentic Indian cuisine, crafted with time-honored recipes passed down through generations. Our commitment to preserving the essence of traditional flavors and using only the freshest ingredients has earned us the love and loyalty of our patrons. From aromatic biryanis to delectable curries, every dish at Glorbus Restaurant is a testament to our passion for excellence and our unwavering dedication to delivering an unforgettable dining experience. Join us on a gastronomic journey that celebrates the rich tapestry of Indian culture and cuisine."
    
    aboutParaTwo.innerText = "At Glorbus Restaurant, our commitment to excellence extends beyond our kitchen. We strive to create a warm and welcoming atmosphere that reflects the essence of Indian hospitality. Our attentive staff is dedicated to ensuring that every visit is a memorable one, providing impeccable service with a personal touch. Whether you're celebrating a special occasion or simply enjoying a meal with loved ones, we aim to make every moment at Glorbus Restaurant extraordinary. With our rich heritage and unwavering dedication to quality, we invite you to join us in savoring the timeless flavors of India. Welcome to Glorbus Restaurant, where tradition meets taste in every bite."

    aboutDiv.setAttribute("id", "menu-div");
    aboutParaOne.setAttribute("class", "about-para");
    aboutParaTwo.setAttribute("class", "about-para");
    glorbus.setAttribute("id", "name");
    paraContainer.setAttribute("id", "para-container");
    
    paraContainer.append(glorbus, aboutParaOne, aboutParaTwo);
    aboutDiv.appendChild(paraContainer);
    contentDiv.appendChild(aboutDiv);

}

AboutUs.onclick = renderAbout;