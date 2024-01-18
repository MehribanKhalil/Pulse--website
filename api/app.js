import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(cors())

const { Schema } = mongoose;

const menuSchema = new Schema({
    title: { type: String, require: true },
    price: { type: Number, require: true },
    info: { type: String, require: true },
});

const Menu = mongoose.model('Menu', menuSchema);


app.get('/menu', async (req, res) => {
    try {
        const menus =await Menu.find()
        res.status(200).json(menus)

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.get('/menu/:id', async (req, res) => {
    try {
        const menu =await Menu.findById(req.params.id)
        res.status(200).json(menu)

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.delete('/menu/:id', async (req, res) => {
    try {
        const menu =await Menu.findByIdAndDelete(req.params.id)
        res.status(200).json(menu)

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.put('/menu/:id', async (req, res) => {
    try {
        const menu =await Menu.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json(menu)

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.post('/menu', async (req, res) => {
    try {
        const menu = new Menu({...req.body})
        await menu.save()
        res.status(200).json(menu)

    } catch (error) {
        res.status(500).json({ message: error })
    }
})


const url = "mongodb+srv://tu833kmn0:mehriban098@cluster0.xewqdvo.mongodb.net/"
const port = 8000

mongoose.connect(url).then(console.log('db connected'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})