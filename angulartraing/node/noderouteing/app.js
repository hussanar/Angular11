const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/' + "index.html")
});

router.get('/youtube', (req, res) => {
    res.redirect('https://www.youtube.com/channel/UCymibTng4QdVwspKR1YQBHg');
})

router.get('/instragram', (req, res) => {
    res.redirect('https://www.instagram.com/hussanarhussanar/?hl=en');
})

router.get('/linkedin', (req, res) => {
    res.redirect('https://www.linkedin.com/in/hussanar-a-88b0011b7/');
})

module.exports = router