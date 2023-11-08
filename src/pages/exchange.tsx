import { CHAIN_IDS } from 'utils/wagmi'
import Exchange from '../views/Exchange'

const ExchangePage = () => {
  return <Exchange />
}

ExchangePage.chains = CHAIN_IDS

export default ExchangePage
