const btn1 = document.getElementById("searchbtn1");
const btn2 = document.getElementById("searchbtn2");
const btn3 = document.getElementById("searchbtn3");
const people = document.getElementById("peopleDropdown");
const places = document.getElementById("placesDropdown");
const things = document.getElementById("ThingDropdown");
const display = document.getElementById("carddisplay")

async function searchbtn1() {

    const res = await fetch("https://ghibliapi.herokuapp.com/people")
    const data = await res.json()
    console.log(data)



    for (let i = 0; i < data.length; i++) {
        let a = document.createElement("a")

        a.className = "dropdown-item"

        a.innerText = data[i].name
        people.appendChild(a)
    }


    
};



searchbtn1()




async function searchbtn2() {
    const res = await fetch("https://ghibliapi.herokuapp.com/locations")
    const data = await res.json()
    console.log(data)

    for (let i = 0; i < data.length; i++) {
        let a = document.createElement("a")

        a.className = "dropdown-item"

        a.innerText = data[i].name
        places.appendChild(a)
    }

};

searchbtn2()




async function searchbtn3() {
    const res = await fetch("https://ghibliapi.herokuapp.com/species")
    const data = await res.json()
    console.log(data)

    for (let i = 0; i < data.length; i++) {
        let a = document.createElement("a")

        a.className = "dropdown-item"

        a.innerText = data[i].name
        things.appendChild(a)
    }
}

searchbtn3()

async function card() {

    const res = await fetch("https://ghibliapi.herokuapp.com/people")
    const data = await res.json()
    console.log(data)



    for (let i = 0; i < data.length; i++) {
        let a = document.createElement("div")

        a.className = "Card"

        a.innerText = data[i].name
        card.appendChild(a)
    }


    
};



card()
