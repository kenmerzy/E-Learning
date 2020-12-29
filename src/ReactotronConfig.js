import Reactotron from 'reactotron-react-js'

/* eslint-disable import/no-extraneous-dependencies */
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron
  .configure()
  .use(reactotronRedux())
  .connect()

console.tron = reactotron

export default reactotron
