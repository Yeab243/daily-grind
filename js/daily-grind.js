// alert("It's working");

/*
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content

pic - image src
alt - the alt tag for the image
desc - a description of the coffee
day- the day of the week for the coffee
color - color associated with coffee
name -  name of the coffee
*/
function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
    
        <p>  
            <img src="${coffee.pic}" alt="${coffee.alt}"  id = "coffee"/>
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s 
            daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}    
        </p> 
    
    `;
    return myReturn; 
}

let myDate = new Date ();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

// use location object to access querystring (address bar)
const queryString = window.location.search;

// output to console
console.log(queryString);

// separate querystring parameters
const urlParams = new URLSearchParams (queryString);

if (urlParams.has('day')) {//data on querystring, load from querystring
    myDay = urlParams.get('day');
}


// converts to integer as it's a string from querystring
myDay = parseInt(myDay);


switch(myDay){

    case 0:
        today = "Sunday";

        coffee ={
            color:"Chartreuse",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picute of a frappaccino",
            day: "Sunday",
            desc: `The word "Frappuccino" is a combination of "lait frappe" 
            (a type of French milkshake) and "cappuccino" (an espresso-based 
            coffee drink with steamed milk). !`
        };  
    break;

    case 1:
        today = "Monday";

        coffee ={
            color:"DarkCyan",
            name: "caramel-latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picute of a caramel-latte",
            day: "Monday",
            desc: `A Caramel Latte is made by mixing espresso with caramel syrup 
            and pouring steamed milk on top. Enjoy one of the sweetest coffees!`
        };  
    break;

    case 2:
        today = "Tuesday";  
        
        coffee ={
            color:"Pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picute of a bubble tea",
            day: "Tuesday",
            desc: `Bubble Tea, also known as boba milk tea, is a cold, frothy drink 
            made with a tea base shaken with flavors, sweeteners and/or milk with 
            tapioca pearls at the base of the drink. Fat Straw Required.!`
        };
    break;

    case 3:
        today = "Wednesday";  
        
        coffee ={
            color:"Fuchsia",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picute of drip",
            day: "Wednesday",
            desc: `Drip coffee confidently wins the title of the most modern and popular 
            beverage. Its main advantage is that this technology fully preserves the 
            delicious and energetic characteristics of natural coffee, and at the same 
            time, you can drink a coffee in minutes.!`
        };
    break;

    case 4:
        today = "Thursday";  
        
        coffee ={
            color:"MediumSpringGreen",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picute of Mocha",
            day: "Thursday",
            desc: `Our mocha is a blend of a cappuccino and a hot chocolate. Like a 
            cappuccino it contains espresso, warm milk and a frothy top but it also 
            contains a sweet chocolatey twist using either chocolate powder, chocolate 
            syrup or melted chocolate.!`
        };
    break;

    case 5:
        today = "Friday";  
            
        coffee ={
            color:"brown",
            name: "Cold-brew",
            pic: "images/cold-brew.jpg",
            alt: "A picute of Cold-brew",
            day: "Friday",
            desc: `Iced coffee is brewed using hot water it is simply regular drip 
            coffee that is been allowed to cool and poured over ice. Not surprisingly, 
            cold brew is brewed using cold or room temperature water.!`
        };
    break;

    case 6:
        today = "Saturday";  
            
        coffee ={
            color:"Deep Orange",
            name: "Pumpkin-spice-latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picute of Pumpkin-spice-latte",
            day: "Saturday",
            desc: `The Pumpkin Spice Latte is a coffee drink made with a mix of traditional 
            autumn spice flavors (cinnamon, nutmeg, and clove), steamed milk, espresso, and 
            often sugar, topped with whipped cream and pumpkin pie spice.!`
        };
    break;

    default:
        today = "Something went wrong!";
}
// let coffeeData = coffeeTemplate(coffee);
// alert(coffeeData);
 

//loads coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee)

document.querySelector("html").style.backgroundColor = coffee.color;

// console.log(coffee);
