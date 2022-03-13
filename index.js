  async function getQuotes(){
    let quotes = await fetch('https://api.adviceslip.com/advice').then(res => res.json())
    let advice = await quotes.slip.advice;
    let adviceId = await quotes.slip.id;
    document.getElementById('quote').innerHTML = `<q>${advice}</q>`;
    document.getElementById('id').innerHTML = `<q>Advice #${adviceId}</q>`;
  }

  getQuotes()

  let btn = document.getElementById('btn')
  btn.addEventListener("click", getQuotes)

