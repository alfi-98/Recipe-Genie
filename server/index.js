const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const express = require("express")
const configuration = new Configuration({ 
    organization: "org-RTqBwF40uGBotmcsqFpeBnEw",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(cors())
const port  = 3080
 
app.post('/', async (req, res) => {
    try {
        const {message} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
    });
    res.json({
        message: response.data.choices[0].text,
    })
    }catch(error){
        console.error(error)
        res.status(500).json({ message: "Internal server error" });
    }
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})