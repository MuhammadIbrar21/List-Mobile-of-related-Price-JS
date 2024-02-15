
// Button from 5,000 < 10,000

let firstBtn = document.getElementById("firstBtn");

firstBtn.addEventListener("click", showFtoT);

function showFtoT() {

    let name = ["OPPO", "Realme", "QMobile", "Nokia", "Samsung", "Vivo"];
    let price = ["Rs 4,999", "Rs 7,499", "Rs 9,799", "Rs 9,999", "Rs 5,999", "Rs 6,499"];


    let mobileCompany = document.getElementsByClassName("mobile-name");
    let mobilePrice = document.getElementsByClassName("mobile-price");

    for (let i = 0; i < name.length; i++) {
        let randomName = name[(Math.floor(Math.random() * name.length))];
        let randomPrice = price[(Math.floor(Math.random() * price.length))];
        mobileCompany[i].innerHTML = randomName;
        mobilePrice[i].innerHTML = randomPrice;
    }
}

// Button from 10,000 < 15,000

let secondBtn = document.getElementById("secondBtn");

secondBtn.addEventListener("click", showTtoFT);

function showTtoFT() {

    let name = ["OPPO", "Realme", "QMobile", "Nokia", "Samsung", "Vivo"];
    let price = ["Rs 9,999", "Rs 11,499", "Rs 13,999", "Rs 12,299", "Rs 14,999", "Rs 10,499"];


    let mobileCompany = document.getElementsByClassName("mobile-name");
    let mobilePrice = document.getElementsByClassName("mobile-price");

    for (let i = 0; i < name.length; i++) {
        let randomName = name[(Math.floor(Math.random() * name.length))];
        let randomPrice = price[(Math.floor(Math.random() * price.length))];
        mobileCompany[i].innerHTML = randomName;
        mobilePrice[i].innerHTML = randomPrice;
    }
}

// Button from 15,000 < 20,000

let thirdBtn = document.getElementById("thirdBtn");

thirdBtn.addEventListener("click", showFTtoTW);

function showFTtoTW() {

    let name = ["OPPO", "Realme", "QMobile", "Nokia", "Samsung", "Vivo"];
    let price = ["Rs 16,999", "Rs 17,499", "Rs 18,999", "Rs 19,999", "Rs 14,999", "Rs 19,499"];


    let mobileCompany = document.getElementsByClassName("mobile-name");
    let mobilePrice = document.getElementsByClassName("mobile-price");

    for (let i = 0; i < name.length; i++) {
        let randomName = name[(Math.floor(Math.random() * name.length))];
        let randomPrice = price[(Math.floor(Math.random() * price.length))];
        mobileCompany[i].innerHTML = randomName;
        mobilePrice[i].innerHTML = randomPrice;
    }
}

// Button from 20,000 < 25,000

let fourthBtn = document.getElementById("fourthBtn");

fourthBtn.addEventListener("click", showTWtoTF);

function showTWtoTF() {

    let name = ["OPPO", "Realme", "QMobile", "Nokia", "Samsung", "Vivo"];
    let price = ["Rs 19,999", "Rs 21,499", "Rs 20,999", "Rs 23,999", "Rs 24,999", "Rs 22,499"];


    let mobileCompany = document.getElementsByClassName("mobile-name");
    let mobilePrice = document.getElementsByClassName("mobile-price");

    for (let i = 0; i < name.length; i++) {
        let randomName = name[(Math.floor(Math.random() * name.length))];
        let randomPrice = price[(Math.floor(Math.random() * price.length))];
        mobileCompany[i].innerHTML = randomName;
        mobilePrice[i].innerHTML = randomPrice;
    }
}