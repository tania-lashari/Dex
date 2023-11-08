import { CHAIN_IDS } from 'utils/wagmi'
import Farming from '../views/Farming'

const FarmingPage = () => {
  return <Farming />
}

FarmingPage.chains = CHAIN_IDS

export default FarmingPage
