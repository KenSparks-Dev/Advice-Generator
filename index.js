  async function getQuotes(){
    let response = await fetch('https://api.adviceslip.com/advice')
    let quotes = await response.json()
    let advice = quotes.slip.advice;
    let adviceId = quotes.slip.id;
    document.getElementById('quote').innerHTML = `<q>${advice}</q>`;
    document.getElementById('id').innerHTML = `<q>Advice #${adviceId}</q>`;
  }

  getQuotes()

  let btn = document.getElementById('btn')
  btn.addEventListener("click", getQuotes)

