import { useState } from 'react'
import { ChainId } from '@pancakeswap/sdk'
import {
  Button,
  Text,
  useModal,
  Link,
  Flex,
  ButtonMenu,
  useMatchBreakpoints,
} from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

import useTheme from 'hooks/useTheme'

import Page from '../Page'

export const ACCESS_TOKEN_SUPPORT_CHAIN_IDS = [ChainId.BASE_TESTNET]


export default function Farming() {
  const [isChartExpanded, setIsChartExpanded] = useState(false)
  const { isMobile } = useMatchBreakpoints()
  const { t } = useTranslation()

  const { isDark } = useTheme()

  return (
    <Page removePadding={isChartExpanded} hideFooterOnDesktop={isChartExpanded}>
      <Flex
        style={{
          width: '100%',
          fontFamily: 'Inter',
          fontSize: '24px',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginLeft: '10px',
          marginBottom: '10px',
          fontWeight: 700,
        }}
      >
        Farming
      </Flex>
      <Flex
        width="100%"
        justifyContent="center"
        position="relative"
        style={{
          borderRadius: '11px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          height: '214px',
          marginBottom: '60px',
        }}
      >
        <img
          src="./images/main-image.png"
          alt="img"
          style={{ width: '100%', height: isMobile ? '120%' : '100%', borderRadius: '11px' }}
        />
        <div style={{ position: 'absolute' }}>
          <div
            style={{
              color: '#FFF',
              fontSize: '24px',
              fontStyle: 'normal',
              textAlign: 'center',
              fontWeight: '700',
              lineHeight: 'normal',
              paddingTop: '30px',
            }}
          >
            DUBY Exchange - Farming
          </div>
          <div
            style={{
              color: '#FFF',
              fontSize: '13px',
              fontStyle: 'normal',
              textAlign: 'center',
              fontWeight: '400',
              lineHeight: 'normal',
              paddingTop: '16px',
              maxWidth: '440px'
            }}
          >
            Swap Tokens, earn CNTO Rewards for Liquidty Mining and Staking! CNTO Rewards for all New Pools will start from 18th March 2023.
          </div>
          <div style={{ textAlignLast: 'center' }}>
            <ButtonMenu
              scale="md"
              variant="primary"
              marginBottom="20px"
              style={{ border: 'none', marginTop: '26px', background: 'transparent', textDecoration: 'none' }}
            >
              <Link
                href="/"
                style={{
                  background: 'white',
                  color: '#06F',
                  borderRadius: '5px',
                  border: '1px solid #06F',
                  padding: '10px 20px',
                  marginRight: '10px',
                  textDecoration: 'none',
                }}
              >
                {t('Unlock Wallet')}
              </Link>
            </ButtonMenu>
          </div>
        </div>
      </Flex>
      <img
        src="./images/Ellipse.png"
        alt="img"
        style={{ width: '100vw', height: '108%', position: 'absolute', objectFit: 'cover', zIndex: -999 }}
      />
      <Flex
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        <Flex
          justifyContent="center"
          height="485px"
          maxWidth={isMobile?"100%":"340px"}
          minWidth="340px"
          flex="1 0 0"
          borderRadius="10px"
          border={isDark?"1px solid rgba(255, 255, 255, 0.20)":"1px solid rgba(31, 68, 241, 0.60)"}
          background="rgba(255, 255, 255, 0.10)"
          padding="40px 20px"
        >
          <Flex
            style={{
              flexDirection: "column",
              alignItems: "center",
              gap: "38px"
            }}
          >
            <img src="./images/image4.png" alt="img" width="239px" height="204px" />
            <Flex
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "28px",
                alignSelf: "stretch",
              }}
            >
              <Flex
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "11px",
                  alignSelf: "stretch"
                }}
              >
                <Text
                  style={{
                    color: isDark ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal"
                  }}
                >
                  DUBY <span style={{ color: "#1F44F1" }}>Farm</span>
                </Text>
                <Text
                  style={{
                    alignSelf: "stretch",
                    color: isDark ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "177.523%"
                  }}
                >
                  Deposit your LP tokens and watch your CNTO rewards grow! Participate in our program and earn CNTO by providing liquidity.
                </Text>
              </Flex>
              <Button
                style={{
                  padding: "15px 20px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "5px",
                  background: isDark ? "#1F44F1" : "rgba(31, 68, 241, 0.10)"
                }}
              >
                <Text
                  style={{
                    color: isDark ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "15.06px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "14.632px"
                  }}
                >
                  Go to DUBY Farm
                </Text>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M0 8.5H17M17 8.5L9.47541 1.5M17 8.5L9.47541 15.5" stroke="#1F44F1" strokeWidth="2"/>
                </svg>
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          height="485px"
          maxWidth={isMobile?"100%":"340px"}
          minWidth="340px"
          flex="1 0 0"
          borderRadius="10px"
          border={isDark?"1px solid rgba(255, 255, 255, 0.20)":"1px solid rgba(31, 68, 241, 0.60)"}
          background="rgba(255, 255, 255, 0.10)"
          padding="40px 20px"
        >
          <Flex
            style={{
              flexDirection: "column",
              alignItems: "center",
              gap: "38px"
            }}
          >
            <img src="./images/image5.png" alt="img" width="239px" height="204px" />
            <Flex
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "28px",
                alignSelf: "stretch",
              }}
            >
              <Flex
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "11px",
                  alignSelf: "stretch"
                }}
              >
                <Text
                  style={{
                    color: isDark ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal"
                  }}
                >
                  USDC <span style={{ color: "#1F44F1" }}>Farms</span>
                </Text>
                <Text
                  style={{
                    alignSelf: "stretch",
                    color: isDark ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "177.523%"
                  }}
                >
                  Grow your CNTO rewards by depositing LP tokens. Join our program to earn CNTO while boosting liquidity. Start earning today!
                </Text>
              </Flex>
              <Button
                style={{
                  padding: "15px 20px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "5px",
                  background: isDark ? "#1F44F1" : "rgba(31, 68, 241, 0.10)"
                }}
              >
                <Text
                  style={{
                    color: isDark ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "15.06px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "14.632px"
                  }}
                >
                  Go to USDC Farm
                </Text>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M0 8.5H17M17 8.5L9.47541 1.5M17 8.5L9.47541 15.5" stroke="#1F44F1" strokeWidth="2"/>
                </svg>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Page>
  )
}
