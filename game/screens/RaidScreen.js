import DefaultLayout from "/game/layouts/DefaultLayout.js"
import SaveButton from "/game/components/SaveButton.js"

import QuarryIndicator from "/game/components/QuarryIndicator.js"
import WeaponSelector from "/game/components/WeaponSelector.js"
import BottomBar from "/game/components/BottomBar.js"
import BattleArea from "../components/BattleArea.js"

const RaidScreen = function () {
    game.quarry.newRaid()

    return {
        view (vnode) {
            return m("div", { class : "raid-screen" }, [
                m(DefaultLayout, {
                    centerContent : [
                        m(QuarryIndicator),
                        m(BattleArea)
                    ],
                    rightContent  : [
                        m(WeaponSelector)
                    ]       
                }),
                m(BottomBar)
            ])
        }
    }
}

export default RaidScreen