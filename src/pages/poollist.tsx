import { CHAIN_IDS } from 'utils/wagmi'
import PoolList from '../views/PoolList'

const PoolPage = () => {
  return <PoolList />
}

PoolPage.chains = CHAIN_IDS

export default PoolPage
