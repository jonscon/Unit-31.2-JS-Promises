let base_url = "https://deckofcardsapi.com/api/deck"

// 1
axios.get(`${base_url}/new/draw/?count=1`)
    .then(data => {
        let card = data.data.cards[0]
        console.log(`${card.value} of ${card.suit}`)
    })
    .catch(err => console.log(err));

// 2
let cards = []
axios.get(`${base_url}/new/draw/?count=1`)
    .then(card => {
        cards.push(card.data.cards[0])
        let deck_id = card.data.deck_id;
        return axios.get(`${base_url}/${deck_id}/draw/?count=1`)
    })
    .then(card => {
        cards.push(card.data.cards[0])
        cards.forEach(card => {
            console.log(`${card.value} of ${card.suit}`);
        })
        // console.log(`${card1.value} of ${card1.suit}`)
    })
    .catch(err => console.log(err));

// 3
let button = $('button');
let deckID = null;

axios.get(`${base_url}/new/shuffle/`)
    .then(deck => {
        deckID = deck.data.deck_id;
    })
    .catch(err => console.log(err));

button.on('click', () => {
    axios.get(`${base_url}/${deckID}/draw/?count=1`)
        .then(data => {
            let card = data.data.cards[0]
            $('body').append(`<p>${card.value} of ${card.suit} (${data.data.remaining} cards remaining!)</p>
                <p></p>`)
        })
    console.log("CLICKED");
})

