import JSBI from 'jsbi'
import { Token } from './entities/token'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  ETHEREUM = 1,
  GOERLI = 5,
  BSC = 56,
  BSC_TESTNET = 97,
  BASE_TESTNET = 84531,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

// export const DEFAULT_FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'
export const DEFAULT_FACTORY_ADDRESS = '0x11D7F14B563b8b70C83DCA11E65e564a299b166c'
// // TODO: ETH This is test version, do not depends on it
const FACTORY_ADDRESS_ETH = '0xD93801d7D3a368D94A3A32E97A20f7aC1948a5dB'
export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: '0x0f7A8bB1FB65c875617303da161BFF04C878810f',
  [ChainId.GOERLI]: '0x42834eAA6627Be30bc1B9723C31EDE32c8Ff8bcf',
  [ChainId.BSC]: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
  [ChainId.BSC_TESTNET]: '0x5Fe5cC0122403f06abE2A75DBba1860Edb762985',
  [ChainId.BASE_TESTNET]: '0x11D7F14B563b8b70C83DCA11E65e564a299b166c',
}

// const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
const INIT_CODE_HASH_ETH = '0xa8c1d32f8b6354cfaa0cceda9fcb300d4c0c583a421876e05faec85656bd9fee'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: '0x18a7d308eda7a41c8030ee18693f0bef71d9eca801cf54202c638de94e26bac8',
  [ChainId.GOERLI]: '0xa8973d9adb34a31f6662ed29ff6f8168a1d93454a118a8998c539f321499968e',
  [ChainId.BSC]: '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
  [ChainId.BSC_TESTNET]: '0xbb600ba95884f2c2837114fd2f157d00137e0b65b0fe5226523d720e4a4ce539',
  [ChainId.BASE_TESTNET]: '0xa8c1d32f8b6354cfaa0cceda9fcb300d4c0c583a421876e05faec85656bd9fee',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9975 = JSBI.BigInt(9975)
export const _10000 = JSBI.BigInt(10000)

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}

export const WETH9 = {
  [ChainId.ETHEREUM]: new Token(
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.GOERLI]: new Token(
    ChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
}

export const WBNB = {
  [ChainId.ETHEREUM]: new Token(
    ChainId.ETHEREUM,
    '0xE282a15DBad45e3131620C1b8AF85B7330Cb3b4B',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC]: new Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x0dE8FCAE8421fc79B29adE9ffF97854a424Cad09',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BASE_TESTNET]: new Token(
    ChainId.BASE_TESTNET,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped ETH',
    'https://www.base.org'
  ),
}

export const BASE = {
  [ChainId.BASE_TESTNET]: new Token(
    ChainId.BASE_TESTNET,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped ETH',
    'https://www.binance.org'
  ),
}

export const WNATIVE: Record<number, Token> = {
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  [ChainId.BSC]: WBNB[ChainId.BSC],
  [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET],
  [ChainId.BASE_TESTNET]: WBNB[ChainId.BASE_TESTNET],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.ETHEREUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
  [ChainId.BSC]: { name: 'Binance Chain Native Token', symbol: 'BNB', decimals: 18 },
  [ChainId.BSC_TESTNET]: { name: 'Binance Chain Native Token', symbol: 'tBNB', decimals: 18 },
  [ChainId.BASE_TESTNET]: { name: 'Base Chain Native Token', symbol: 'ETH', decimals: 18 },
}
