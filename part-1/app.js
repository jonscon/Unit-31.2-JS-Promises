let base_url = "http://numbersapi.com";
let fav_number = 12

// 1
axios.get(`${base_url}/${fav_number}?json`)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// 2
let fav_numbers = [12, 16, 62, 66]
axios.get(`${base_url}/${fav_numbers}?json`)
    .then(data => {
        fav_numbers.forEach(number => {
            $("body").append(`<p>${data.data[number]}</p>`)
        })
        console.log(data)
    })
    .catch(err => console.log(err));

// 3
let fourPromises = []
for (let i = 0; i < 4; i++) {
    fourPromises.push(
        axios.get(`${base_url}/${fav_number}?json`)
    );
}
Promise.all(fourPromises)
    .then(promiseArr => (
        promiseArr.forEach(p => console.log(p.data.text))
    ))
    .catch(err => console.log(err));