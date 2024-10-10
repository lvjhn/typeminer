import GameUI from "/game/game.js"
import Game from "/game/classes/Game.js"
import WordList from "./classes/WordList.js"

const root = document.getElementById("app")

window.game = new Game()

import WORDLIST from "/assets/words.js"
import WORDLIST_BY_LENGTH from "/assets/words.by-length.js"


window.chance = new Chance()
window.__wordlist__ = new WordList(WORDLIST, WORDLIST_BY_LENGTH)

m.mount(root, GameUI)
