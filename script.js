let cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "😭", "🚀"]
    let ayodouble = cards.concat(cards)
        let troll;
            let imposter = 1;
console.log(ayodouble)

let init = function () {
    troll = document.getElementById('troll')
        shuffleFunc()
            htmlAdd()
}

let shuffleFunc = function () {
    for (let i = 0; i < ayodouble.length; i++) {
        let shuffle = Math.floor(Math.random() * i)

            let j = ayodouble[i]
            ayodouble[i] = ayodouble[shuffle]
            ayodouble[shuffle] = j
    }
}

let htmlAdd = function () {
    for (let i = 0; i < ayodouble.length; i++) {
        let div = document.createElement('div')
        div.innerText = ayodouble[i].substring(0, 2)

            div.className = 'karta hidden'
                div.addEventListener('click', function () {
                    if (imposter > 4) {
                const interval = setInterval(function () {
                    imposter = 1
                    clearInterval(interval)
                }
                , 40)
            }
                else {
                    div.classList.toggle('hidden')
                    div.classList.toggle('revealed')
                        imposter++;
            }
        }
            )
                troll.appendChild(div)
    }
}

window.onload = init