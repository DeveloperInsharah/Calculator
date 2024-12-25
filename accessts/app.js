let username = prompt("Enter Your Name Here :" , "Your Name");
document.querySelector(".name").innerHTML = `${username.toUpperCase()}`;
let string = "";
let buttons = document.querySelectorAll(".b");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click' , (a) => {
        if(a.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('#input').value = string;
        }
        else if(a.target.innerHTML == "AC"){
            string = "";
            document.querySelector('#input').value = string;
        }
        else if(a.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            document.querySelector('#input').value = string;
        }
        else{
        string = string + a.target.innerText;
        document.querySelector('#input').value = string;
    }
    } )
});