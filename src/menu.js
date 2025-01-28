import img0 from "./images/0.jpg"
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.jpg"
import img5 from "./images/5.jpg"
import img6 from "./images/6.jpg"
import img7 from "./images/7.jpg"
import img8 from "./images/8.jpg"


const contentDiv = document.getElementById('content');
const menuButton = document.getElementById("menu");
const menuli = ["Biriyani", "Butter Chicken", "Palak Paneer", "Rogan Josh", "Dosa", "Chole Bhature", "Paneer Tikka", "Dal Makhani", "Pani Puri"];
const priceli = ["250rs", "600rs", "500rs", "800rs", "350rs", "250rs",  "350rs", "500rs", "100rs"];

const picli = [img0,img1,img2,img3,img4,img5,img6,img7,img8];

function renderMenu(){
    contentDiv.innerHTML = "";
    const menuDiv = document.createElement("div");
    const menuContainer = document.createElement("div");
    const menuItems = document.createDocumentFragment();

    menuDiv.setAttribute("id", "menu-div");
    menuContainer.setAttribute("id", "menu-container");

    for(let x in menuli){
        const itemDiv = document.createElement("div");
        itemDiv.setAttribute("class","item-div");

        const img = document.createElement("img");
        img.setAttribute("class", "item-img");
        img.src = picli[x];

        const menuInfoDiv = document.createElement("div");
        menuInfoDiv.setAttribute("class", "item-info-div");

        const menuPara = document.createElement("h2");
        menuPara.setAttribute("class", "item-para");
        menuPara.innerText = menuli[x];

        const price = document.createElement("div");
        price.setAttribute("class", "price");
        price.innerText = priceli[x];

        menuInfoDiv.append(menuPara, price);
        itemDiv.append(img, menuInfoDiv);
        menuItems.appendChild(itemDiv);
    };

    menuContainer.appendChild(menuItems);
    menuDiv.appendChild(menuContainer);
    contentDiv.appendChild(menuDiv);
}

menuButton.onclick = renderMenu;