import QuarryIndicator from "../components/QuarryIndicator.js"
import SaveButton from "/game/components/SaveButton.js"
import DefaultLayout from "/game/layouts/DefaultLayout.js"
import MiningSelector from "../components/MiningSelector.js"
import TypingHistory from "../components/TypingHistory.js"
import WordInput from "../components/WordInput.js"
import BonusIndicator from "../components/BonusIndicator.js"
import RewardIndicator from "../components/RewardIndicator.js"
import RaidTimer from "../components/RaidTimer.js"

const QuarryScreen = {
    view (vnode) {
        return m("div", { class : "quarry-screen" }, [
            m(DefaultLayout, {
                centerContent : [
                    m(QuarryIndicator), 
                    m(TypingHistory), 
                    m(WordInput),
                    m(BonusIndicator),
                    m(RewardIndicator)
                ],
                rightContent  : [
                    m(MiningSelector),
                    m(RaidTimer)
                ]       
            }),
            m(SaveButton, { class : "save-btn" })
        ])
    }
}

export default QuarryScreen