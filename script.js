// DOM manipulation with JavaScript ES2016
console.log(`Author: Darius Tinculescu \nPhone: 0763940905 \nEmail: dariustinculescu@gmail.com`);

// Creating a Person class

class Person {

    static count = 0;

    constructor(name, age, occupation, country) {
        this._id = ++this.constructor.count;
        this._name = name;
        this._age = age;
        this._occupation = occupation;
        this._country = country;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get occupation() {
        return this._occupation;
    }

    set occupation(value) {
        this._occupation = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }
}

// Changing page title
const title = document.querySelector('title');
title.innerText = "DOM manipulation with JS";

// Saving <body> tag in a variable to append children to it
const body = document.querySelector('body');
body.style.cssText = "margin: 0;";

// Creating a basic header
const header = document.createElement('header');
header.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; display: flex; justify-content: space-between; " +
    "align-items: center; height: 80px; background-color: black; color: wheat; z-index: 2; user-select: none;";
body.appendChild(header);

const logo = document.createElement('img');
logo.className = "header-element";
logo.src = "images\\js-logo.jpg";
logo.title = "logo";
logo.style.height = "75px";
header.appendChild(logo);


const h1 = document.createElement('h1');
h1.className = "header-element";
h1.innerText = "JavaScript DOM Manipulation";

header.appendChild(h1);

const headerElements = header.querySelectorAll('*');
headerElements.forEach(element => element.style.cssText += "color: wheat; padding: 7.5px 50px; font-size: 25px;");
// End of header

// Creating a left-side menu
const menuSection = document.createElement('section');
body.appendChild(menuSection);
menuSection.style.cssText = "position: fixed; top: 80px; left: 0; height: calc(100vh - 80px); width: 250px; border: 1px" +
    " solid black; border-top:none; background-color: lightgrey; overflow: auto; z-index: 2; user-select: none;";

const nav = document.createElement('nav');
nav.style.cssText = "padding: 20px;";
menuSection.appendChild(nav);

// show home button
const btnHome = document.createElement('button');
btnHome.innerText = "Home";
nav.appendChild(btnHome);
btnHome.addEventListener('click', showHomeContent);

// show table button
const btnTable = document.createElement("button");
btnTable.innerText = "View Table";
nav.appendChild(btnTable);
btnTable.addEventListener('click', showTableContent);

const navElements = nav.querySelectorAll('*');

// styling all elements inside the nav tag
navElements.forEach(element => {
    element.style.cssText += "display: block; margin-bottom: 10px;";
});

// end of the left-side menu

// creating a main content

const mainContainer = document.createElement('section');
mainContainer.id = "main-container";
mainContainer.style.cssText = "position: relative; top: 80px; left: 250px ;height: calc(100vh - 80px); width: calc(100% - 250px); background-color: wheat; z-index: 1";
body.appendChild(mainContainer);

// display date in the main container top right corner
const date = new Date();
const h3Date = document.createElement('h3');
mainContainer.appendChild(h3Date);
h3Date.innerText = date.toLocaleString();
h3Date.style.cssText = "position: relative; top: 20px; width: max-content; margin: auto; margin-right: 10px;";

// create a home container
const homeContainer = document.createElement('div');
homeContainer.id = "home-container";
homeContainer.style.cssText = "position: relative; top: 50px; height: max-content; width: max-content; margin: auto; display: none;";
mainContainer.appendChild(homeContainer);

const homeTitle = document.createElement('h3');
homeTitle.innerText = "Lorem Ipsum";
homeTitle.className = "home-content";
const homeHr = document.createElement('hr');
homeHr.className = "home-content";
const homePar = document.createElement('p');
homePar.className = "home-content";
homePar.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n" +
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n" +
    "but also the leap into electronic typesetting, remaining essentially unchanged.";

homeContainer.appendChild(homeTitle);
homeContainer.appendChild(homeHr);
homeContainer.appendChild(homePar);

// create a table container
const tableContainer = document.createElement('div');
tableContainer.id = "table-container";
tableContainer.style.cssText = "position: relative; top: 50px; height: max-content; width: max-content; margin: auto;";
mainContainer.appendChild(tableContainer);

// Creating a button to show the form for adding new record in the table
const newPersonBtn = document.createElement('button');
newPersonBtn.id = ('new-person');
newPersonBtn.innerText = "+";
newPersonBtn.addEventListener('click', showForm);
newPersonBtn.style.cssText = "margin-bottom: 10px; border-radius: 50%; background-color: green; color: dark-blue; font-size: 25px; fond-weight: bold;";
tableContainer.appendChild(newPersonBtn);

// creating a basic table

const table = document.createElement('table');
table.className = "table";
table.style.cssText = "width: 716px; border-spacing:0; background-color: black; margin-bottom: 20px;";
table.setAttribute('border', '1');
tableContainer.appendChild(table);

const thead = document.createElement('thead');
thead.style.cssText = " display:block; background-color: black; color: wheat;";
table.appendChild(thead);
const tbody = document.createElement('tbody');
tbody.style.cssText = "display:block; height: 150px; text-align: center; background-color: wheat; overflow: auto; ";
table.appendChild(tbody);
const theadRow = document.createElement('tr');
theadRow.style.cssText = "display:block;";
thead.appendChild(theadRow);

const info = ['Id', 'Name', 'Age', 'Occupation', 'Country'];

info.forEach(element => {
    const th = document.createElement('th');
    th.className = 'th';
    th.style.cssText = "width: 180px;";
    theadRow.appendChild(th);
    th.innerText = element;

});

// Creating a form for adding new records in the table

const form = document.createElement('form');
form.id = "form";
form.style.cssText = "display: none; width: 300px; height: max-content;";
tableContainer.appendChild(form);


for (let i = 1; i < info.length; i++) {

    const formDiv = document.createElement('div');
    formDiv.className = info[i].toLocaleLowerCase() + '-div';
    formDiv.style.cssText = "display:flex; margin-bottom: 10px; justify-content: space-between;";
    form.appendChild(formDiv);

    const label = document.createElement('label');
    label.setAttribute('for', info[i].toLocaleLowerCase());
    label.innerText = info[i] + ":";
    formDiv.appendChild(label);

    const input = document.createElement('input');
    input.id = info[i].toLocaleLowerCase();
    if (input.id === info[2].toLocaleLowerCase()) {
        input.type = "number";
    } else {
        input.type = "text";
    }

    formDiv.appendChild(input);
}

// Creating a button to save records
const saveBtn = document.createElement('button');
saveBtn.addEventListener('click', saveNewRecord);
saveBtn.innerText = "Save";
saveBtn.style.cssText = "display: none;";
tableContainer.appendChild(saveBtn);

// end of main content

// creating functions

function showHomeContent() {
    if (homeContainer.style.display === 'none') {
        homeContainer.style.display = 'block';
        tableContainer.style.display = 'none';
    }
}

function showTableContent() {
    if (tableContainer.style.display === 'none') {
        tableContainer.style.display = 'block';
        homeContainer.style.display = 'none';
    }
}

function showForm() {
    if (form.style.display === 'inline-block') {
        form.style.display = 'none';
        saveBtn.style.display = 'none';
    } else {
        form.style.display = 'inline-block';
        saveBtn.style.display = 'block';
    }
    console.log('showForm() works!');
}

// Creating an array of persons to store the data
let personList = [];

function saveNewRecord() {
    const theName = document.getElementById('name');
    const theAge = document.getElementById('age');
    const theJob = document.getElementById('occupation');
    const theCountry = document.getElementById('country');

    if (isNaN(theName.value && theAge.value && theJob.value && theCountry.value)) {
        const newPerson = new Person(theName.value, theAge.value, theJob.value, theCountry.value);
        personList.push(newPerson);

        const trTbody = document.createElement('tr');
        trTbody.className = "tr-tbody";
        tbody.appendChild(trTbody);

        const tdId = document.createElement('td');
        tdId.className = "td";
        tdId.id = "td-id";
        tdId.innerText = newPerson.id;
        const tdName = document.createElement('td');
        tdName.className = "td";
        tdName.id = "td-name";
        tdName.innerText = newPerson.name;
        const tdAge = document.createElement('td');
        tdAge.className = "td";
        tdAge.id = "td-age";
        tdAge.innerText = newPerson.age;
        const tdJob = document.createElement('td');
        tdJob.className = "td";
        tdJob.id = "td-job";
        tdJob.innerText = newPerson.occupation;
        const tdCountry = document.createElement('td');
        tdCountry.className = "td";
        tdCountry.id = "td-country";
        tdCountry.innerText = newPerson.country;

        trTbody.appendChild(tdId);
        trTbody.appendChild(tdName);
        trTbody.appendChild(tdAge);
        trTbody.appendChild(tdJob);
        trTbody.appendChild(tdCountry);

        console.log(newPerson);
    }
    const tds = document.querySelectorAll('td');

    tds.forEach(element => {
        element.style.cssText += "width: 180px;";
    });
}

















