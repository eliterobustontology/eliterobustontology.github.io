const ROUTECSS=e=>{const t=document.createElement("style");t.textContent=e,document.head.appendChild(t)};
const ROUTEJS=e=>{const t=document.createElement("script");t.textContent=e,document.head.appendChild(t)};
fetch("./Test/Test.json")
.then(res =>res.json())
.then(data =>{
    data.forEach(element => {

        fetch(element.Path+element.Page)
            .then(res =>res.text())
            .then(data =>{
                localStorage.setItem(element.Name,data);
            })
            .catch(error =>console.log(error))

            fetch(element.Path+element.Styles)
            .then(res =>res.text())
            .then(data =>{
                localStorage.setItem(element.Name+"Styles",data);
            })
            .catch(error =>console.log(error))

            fetch(element.Path+element.Functions)
            .then(res =>res.text())
            .then(data =>{
                localStorage.setItem(element.Name+"Functions",data);
            })
            .catch(error =>console.log(error))
            
        });

    })
.catch(error =>console.log(error))

// Fetch The Source Code

fetch("./Library/Functions.js")
.then(res=>res.text())
.then(data =>{
    localStorage.setItem("Fun",data)
} )
.catch(error =>console.log(error))

// Call the Functions
ROUTECSS(localStorage.getItem("HomeStyles"));
ROUTEJS(localStorage.getItem("Fun"));