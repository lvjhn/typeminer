

class WordList
{
    constructor(index, byLength) {
        this.index = index
        this.byLength = byLength
    }

    generateWord(min, max) {
        const chance = new Chance() 
        const target = chance.integer({ min: min, max: max }) 
        const words = this.byLength[target]
        const word = chance.pick(words)
        return word
    }
}

export default WordList