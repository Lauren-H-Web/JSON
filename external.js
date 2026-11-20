/* Javascript JSON */

let getQuote=document.getElementById("get-quotes");
let quote=document.getElementById("quote");
let quoteList;

        const url="quotes.json";

        async function getQuotes(){

            const response=await fetch('quotes.json');
            console.log(response);

            const data=await response.json();
            console.log(data);

            quoteList=data.quote;
            console.log(quoteList);

        }

        getQuotes();

        getQuote.addEventListener("click", function(){
            const randomIndex = Math.floor(Math.random() * quoteList.length);
            quote.textContent = quoteList[randomIndex];
        })


