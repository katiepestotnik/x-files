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
const capitalize = (input) => {
    const cap = input[0].toUpperCase() + input.slice(1)
    return cap
}
// const capLetter = (input) => {
//     const split = input.split('')
//     console.log(split)
// }


const allCaps = (input) => {
    const caps = input.toUpperCase()
    return caps
}
// app.get('/', (req, res) => {
//     res.render('index.ejs', {data:data})
// })


app.get('/sightings/', (req, res) => {
    const { state } = req.query
    const { shape } = req.query
    console.log(shape)
    data.forEach((item) => {
        if (item.state === state) {
            res.render('state.ejs', { data: data, state: allCaps(state) })
        } 
        if (item.shape === shape) {
            res.render('shape.ejs', {data:data, shape:capitalize(shape)})
        }
        if (!shape && !state) {
            res.json(data)
        }
        }) 
})
app.get("/sightings/:id", (req, res) => {
    const { state } = req.query
    const {shape}=req.query
    //console.log(state)
    const { id } = req.params
    if (state) {
        data.forEach((item) => {
            if (item.state === id) { 
                res.render('stateQuery.ejs', { data: data, state: allCaps(state) })
                res.redirect("/sightings/id")
            }
        })
    }
    if (shape) {
        data.forEach((item) => {
            if (item.state === id) { 
                res.render('shapeQuery.ejs', { data: data, shape: capitalize(shape) })
                res.redirect("/sightings/id")
            }
        })
    }
    data.forEach((item) => {
        if (item.state === id) { 
            res.render('state.ejs', { data: data, state: allCaps(id) })
            res.redirect("/sightings/id")
        }
    })
    data.forEach((item) => {
        if (item.shape === id) {
            res.render('shape.ejs', { data: data, shape: capitalize(id)})
            res.redirect("/sightings/id")
        }
    })
})
app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    })