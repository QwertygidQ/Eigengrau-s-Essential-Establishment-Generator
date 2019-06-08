import { thievesMission } from "./thievesMission"
import { alchemistMission } from "./alchemistMissions"
import { merchantMission } from "./merchantMission"

setup.createMission = function (town, base) {
  // var category = ['thieves', 'wizards', 'bartender', 'alchemist', 'merchant']
  const difficulty = [`easy`, `easy`, `easy`, `medium`, `medium`, `hard`]
  // var difficultyText
  let details
  let readout
  let targetNPC
  let targetLocation
  const mission = Object.assign({
    category: [`thieves`, `alchemist`].seededrandom(),
    difficulty: difficulty.seededrandom(),
    readout,
    details,
    targetNPC,
    targetLocation
  }, base)

  switch (mission.category) {
    case `thieves`:
      thievesMission(mission)
      break
    case `alchemist`:
      alchemistMission(mission)
      break
    case `bartender`:
      setup.bartenderMission(mission)
      break
    case `merchant`:
      merchantMission(mission)
      break
  }

  return mission
}
