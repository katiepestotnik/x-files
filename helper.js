const data = require("./sightings.json");
const express = require("express")
const app = express()
const port = 3001
//console.log(data[0])

// const terminal = process.argv[2]
// console.log('state from terminal', terminal)
// const state = terminal.slice(-2)
// const shape = terminal.slice(6)
// const city = terminal.slice(5)
// console.log(city)
// const capitalize = (input) => {
//     const cap = input[0].toUpperCase() + input.slice(1)
//     return cap
// }
// const capLetter = (input) => {
//     const split = input.split('')
//     console.log(split)
// }
// console.log(capLetter(city))
// const allCaps = (input) => {
//     const caps = input.toUpperCase()
//     return caps
// }
// // console.log(capitalize(shape))
// // console.log(allCaps(state))
// data.forEach((site) => {
//     if (site.state === allCaps(state)) {
//         console.log(site)
//     }
//     if (site.shape === capitalize(shape)) {
//         console.log(site)
//     }
//     if (site.city === city) {
//         console.log(site)
//     }
        
// })
const allCaps = (input) => {
    const caps = input.toUpperCase()
    return caps
}


app.get('/sightings', (req, res) => {
    res.json(data)
})
app.get("/sightings/:state", (req, res) => {
    data.forEach((item) => {
        res.render('index.ejs', {data:data, params:req.params.state})
    })




})
app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    })