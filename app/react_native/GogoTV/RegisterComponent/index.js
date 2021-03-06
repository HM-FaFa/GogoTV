/**
 * Created by zhuguoqing on 17/4/27.
 */
import {AppRegistry}    from 'react-native';

//Tab
import {
  TabBar
} from './TabBar'

// Recommend
import  {
  Recommend
} from './Recommend'

// VideoLibrary
import {
  VideoLibrary
} from './VideoLibrary'

// History
import {
  History
} from './History'

// Mine
import  {
  Mine,
  MineShowInfo,
} from './Mine'

// Player 
import {
  TestPlayer,
  PlayerControlBig,
  PlayerControlSmall,
  PlayerDetail
} from './Player'

function RegisterComponent() {
  
  // TabBar
  AppRegistry.registerComponent('tabBar',() => TabBar)

  // recommend
  AppRegistry.registerComponent('recommend',() => Recommend)

  // videoLibrary
  AppRegistry.registerComponent('videoLibrary',() => VideoLibrary)

  // history
  AppRegistry.registerComponent('history',() => History)

  // Mine
  AppRegistry.registerComponent('mine',() => Mine)
  AppRegistry.registerComponent('mineShowInfo',() => MineShowInfo)

  // Player
  AppRegistry.registerComponent('testPlayer',() => TestPlayer)
  AppRegistry.registerComponent('PlayerControlSmall',() => PlayerControlSmall)
  AppRegistry.registerComponent('PlayerControlBig',() => PlayerControlBig)
  AppRegistry.registerComponent('PlayerDetail',() => PlayerDetail)
}

module.exports = RegisterComponent;






