let url = "http://numbersapi.com/";
let number = document.querySelector('#number');



let factButton = document.querySelector('.fact-button');
let randomButtom = document.querySelector('.random');
let card = document.querySelector('.number-card');

let display = document.querySelector('.display');

let fact = document.querySelector('.fact');

factButton.addEventListener('click', async ()=>{
    try {
        let numberValue = number.value;
        let finalUrl = url + numberValue;
        if(numberValue == ""){
            card.style.display = 'block';
            display.textContent = "Error! Enter A Number";
            return;
        }
        card.style.display = 'block';
        number.value = "";

        let response = await fetch(finalUrl);
         if(!response.ok){
            card.style.display = 'block';
            display.textContent = "Error Data Could Not Fetch"
        }
        let data = await response.text();
        display.textContent = numberValue;
        fact.textContent = data;
        
    } catch (error) {
        card.style.display = 'block';
        display.textContent = "Error Data Could Not Fetch"
    }
});

randomButtom.addEventListener('click',async ()=>{
    try {
       let randomNumber = Math.floor(Math.random() * 301);
        card.style.display = 'block';

        let finalUrl = url + randomNumber;

        let response = await fetch(finalUrl);
         if(!response.ok){
            card.style.display = 'block';
            display.textContent = "Error Data Could Not Fetch"
        }
        let data = await response.text();
        display.textContent = randomNumber;
        fact.textContent = data;
        
    } catch (error) {
        card.style.display = 'block';
        display.textContent = "Error Data Could Not Fetch"
    }
})