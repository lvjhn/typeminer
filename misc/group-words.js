const WORDLIST = require("../assets/words.js")
const fs = require("fs")

const byLength = {}
const words = Object.keys(WORDLIST)
const n = words.length

for(let i = 0; i < n; i++) {
    const word = words[i]
    const length = word.length
    if(!(length in byLength)) {
        byLength[length] = []
    }
    byLength[length].push(word)
}

fs.writeFileSync("./assets/words.by-length.json", JSON.stringify(byLength, null, 4))