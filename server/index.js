import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const { Schema } = mongoose;

const FlowersSchema = new Schema({
  title: String,
  price: Number,
  image:String
 
});
const Flowers = mongoose.model('Flowers', FlowersSchema);

app.get('/', async(req, res) => {
  try {
    const flower=await Flowers.find({})
    res.json(flower)
  } catch (error) {
    res.status(500).json(error)
  }
})

app.post('/', async(req, res) => {
    try {
      const flower=new Flowers({...req.body})
      await flower.save()
      res.status(200).json("created")
    } catch (error) {
      res.status(500).json(error)
    }
  })

  app.delete('/:id', async(req, res) => {
    try {
        const {id}=req.params
      const flower=await Flowers.findByIdAndDelete(id)
      res.status(200).json("deleted")
    } catch (error) {
      res.status(500).json(error)
    }
  })

  app.get('/:id', async(req, res) => {
    try {
        const {id}=req.params
      const flower=await Flowers.findById(id)
      res.json(flower)
    } catch (error) {
      res.status(500).json(error)
    }
  })
mongoose.connect("mongodb+srv://nuranaisazade:nurana2004@cluster0.bnrclo9.mongodb.net/").then(()=>console.log("connected"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})