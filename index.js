  async function getQuotes(){
    let quotes = await (await fetch('https://api.adviceslip.com/advice')).json()
    let advice = quotes.slip.advice;
    let adviceId = quotes.slip.id;
    document.getElementById('quote').innerHTML = `<q>${advice}</q>`;
    document.getElementById('id').innerHTML = `<q>Advice #${adviceId}</q>`;
  }

  getQuotes()

  let btn = document.getElementById('btn')
  btn.addEventListener("click", getQuotes)

