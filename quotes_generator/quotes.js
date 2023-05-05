let author = document.querySelector('.author');
let quote = document.querySelector('.quote-text');
let genNewQuote = document.querySelector('#gen-new-quote');

function fetchQuotes() {
    const apiKey = 'ci+eCxxhpI9Fw5rqIDeJcQ==8aCe3ao3LO4WvS0x';
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
    const headers = new Headers({
      'X-Api-Key': apiKey
    });
  
    return fetch(apiUrl, { headers })
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => console.error(error));
  }
 genNewQuote.addEventListener('click', ()=>{
    fetchQuotes().then(data => {
        console.log(data);
        quote.innerText = data[0].quote

        author.innerText = data[0].author
        
      })}
 )
// console.log(author.innerText,quote.innerText);