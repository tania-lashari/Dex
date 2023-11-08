import { useState } from 'react'
import { ChainId } from '@pancakeswap/sdk'
import {
  Button,
  Text,
  useModal,
  Flex,
  useMatchBreakpoints,
  Link,
  ButtonMenu
} from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

import useTheme from 'hooks/useTheme'

import Page from '../Page'

export const ACCESS_TOKEN_SUPPORT_CHAIN_IDS = [ChainId.BASE_TESTNET]


export default function Staking() {
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
        Staking
      </Flex>
      <Flex
        width="100%"
        justifyContent="center"
        position="relative"
        style={{
          borderRadius: '11px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          height: '214px',
          marginBottom: '18px',
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
            DUBY Exchange - Lottery
          </div>
          <div
            style={{
              color: '#FFF',
              fontSize: '13px',
              fontStyle: 'normal',
              textAlign: 'center',
              fontWeight: '400',
              lineHeight: 'normal',
              paddingTop: '16px'
            }}
          >
            {t('Experience the thrill of winning with DUBY Exchange\'s exciting lottery program. Participate now for exciting prizes!')}
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
                {t('Prize : 250 USDC')}
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
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "18px",
          marginTop: isMobile ? "40px" : "0"
        }}
      >
        <Flex
          justifyContent="center"
          minWidth="320px"
          height="127px"
          flex="1 0 0"
          borderRadius="11px"
          border={isDark?"1px solid rgba(255, 255, 255, 0.12)":"1px solid rgba(0, 0, 0, 0.12)"}
          background={isDark?"rgba(255, 255, 255, 0.05)":"#F5F5F5"}
          padding="26px 12px"
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gap="14px"
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <Text
                style={{
                  color: isDark ? "#FFF" : "#000",
                  fontFamily: "Inter",
                  fontSize: "30px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal"
                }}
              >
                53903
              </Text>
              <div
                style={{
                  display: "flex",
                  padding: "6.5px 0px",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  gap: "10px",
                  alignSelf: "stretch"
                }}
              >
                <Text
                  style={{
                    color: isDark ? "#B4B9C7" : "#434343",
                    fontFamily: "Inter",
                    fontSize: "13.333px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal"
                  }}
                >
                  CNTO
                </Text>
              </div>
            </div>
            <Text
              style={{
                color: isDark ? "rgba(180, 185, 199, 0.70)" : "rgba(109, 109, 109, 0.70)",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal"
              }}
            >
              Total CNTO Depoist
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          height="127px"
          minWidth="320px"
          flex="1 0 0"
          borderRadius="11px"
          border={isDark?"1px solid rgba(255, 255, 255, 0.12)":"1px solid rgba(0, 0, 0, 0.12)"}
          background={isDark?"rgba(255, 255, 255, 0.05)":"#F5F5F5"}
          padding="26px 12px"
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gap="14px"
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <Text
                style={{
                  color: isDark ? "#FFF" : "#000",
                  fontFamily: "Inter",
                  fontSize: "30px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal"
                }}
              >
                3483
              </Text>
              <div
                style={{
                  display: "flex",
                  padding: "6.5px 0px",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  gap: "10px",
                  alignSelf: "stretch"
                }}
              >
                <Text
                  style={{
                    color: isDark ? "#B4B9C7" : "#434343",
                    fontFamily: "Inter",
                    fontSize: "13.333px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal"
                  }}
                >
                  Ticket
                </Text>
              </div>
            </div>
            <Text
              style={{
                color: isDark ? "rgba(180, 185, 199, 0.70)" : "rgba(109, 109, 109, 0.70)",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal"
              }}
            >
              Total Ticket  Generalized
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          height="127px"
          minWidth="320px"
          flex="1 0 0"
          borderRadius="11px"
          border={isDark?"1px solid rgba(255, 255, 255, 0.12)":"1px solid rgba(0, 0, 0, 0.12)"}
          background={isDark?"rgba(255, 255, 255, 0.05)":"#F5F5F5"}
          padding="26px 10px"
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gap="14px"
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <Text
                style={{
                  color: isDark ? "#FFF" : "#000",
                  fontFamily: "Inter",
                  fontSize: "30px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal"
                }}
              >
                0
              </Text>
              <div
                style={{
                  display: "flex",
                  padding: "6.5px 0px",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  gap: "10px",
                  alignSelf: "stretch"
                }}
              >
                <Text
                  style={{
                    color: isDark ? "#B4B9C7" : "#434343",
                    fontFamily: "Inter",
                    fontSize: "13.333px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal"
                  }}
                >
                  %
                </Text>
              </div>
            </div>
            <Text
              style={{
                color: isDark ? "rgba(180, 185, 199, 0.70)" : "rgba(109, 109, 109, 0.70)",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal"
              }}
            >
              Your Chances of Winning
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        <Flex
          justifyContent="center"
          height="485px"
          minWidth="320px"
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
            <img src="./images/image8.png" alt="img" width="239px" height="204px" />
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
                  0 DUBY - <span style={{ color: "#1F44F1" }}>Your Depoist</span>
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
              <Flex
                style={{
                  gap: "10px"
                }}
              >
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
                    Depoist
                  </Text>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                    <path d="M0 8.5H17M17 8.5L9.47541 1.5M17 8.5L9.47541 15.5" stroke="#1F44F1" strokeWdth="2"/>
                  </svg>
                </Button>
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
                    Withdrawal
                  </Text>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                    <path d="M0 8.5H17M17 8.5L9.47541 1.5M17 8.5L9.47541 15.5" stroke="#1F44F1" strokeWidth="2"/>
                  </svg>
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          height="485px"
          minWidth="320px"
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
            <img src="./images/image9.png" alt="img" width="239px" height="204px" />
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
                  Your Total <span style={{ color: "#1F44F1" }}>Tickets</span>
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
                  Get Tickets
                </Text>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M0 8.5H17M17 8.5L9.47541 1.5M17 8.5L9.47541 15.5" stroke="#1F44F1" strokeWidth="2"/>
                </svg>
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <div
          style={{
            display: "inline-flex",
            justifyContent: "space-between",
            height: "485px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "14px",
            flex: "1 0 0"
          }}
        >
          <Flex
            style={{
              width: "100%",
              padding: isMobile ? "18px 18px" : "18px 44px",
              background: "#1F44F1",
              borderRadius: "10px",
              border: "1px solid #1F44F1",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "11px"
              }}
            >
              <Flex
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.40)",
                    textAlign: "center",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal"
                  }}
                >
                  Deposits Ends in
                </Text>
                <Text
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "177.523%"
                  }}
                >
                  1D : 23H : 24 Min
                </Text>
              </Flex>
              <svg xmlns="http://www.w3.org/2000/svg" width="262" height="2" viewBox="0 0 262 2" fill="none">
                <path d="M0 1H262" stroke="white" strokeOpacity="0.1"/>
              </svg>
              <Flex
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.40)",
                    textAlign: "center",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal"
                  }}
                >
                  Lottery Ends in
                </Text>
                <Text
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "177.523%"
                  }}
                >
                  1D : 23H : 24 Min
                </Text>
              </Flex>
            </div>
          </Flex>
          <div
            style={{
              width: "100%",
              padding: isMobile ? "22px 0" : "22px 22px",
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "28px",
              borderRadius: "10px",
              border: "1px solid #1F44F1",
              background: "#1F44F1"
            }}          
          >
            <Flex
              style={{
                flexDirection: "column",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal"
                }}
              >
                Stake DUBY Token
              </Text>
              <Text
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "177.523%"
                }}
              >
                Available : 12
              </Text>
            </Flex>
            <Flex
              style={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px",
                borderRadius: "6px",
                background: "rgba(255, 255, 255, 0.10)"
              }}
            >
              <Flex
                style={{
                  alignItems: "center",
                  gap: "12px"
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                  <path d="M3.75226 9.52637L7.4251 0.295889H0.0794208L3.75226 9.52637Z" fill="#616264"/>
                </svg>
                <img src="./images/image6.png" alt="img" width="30px" height="30px" />
                <Text
                  style={{
                    color: "#FFF",
                    textAlign: "right",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "124.5%"
                  }}
                >
                  DUBY
                </Text>
              </Flex>
              <Text
                style={{
                  color: "#FFF",
                  textAlign: "right",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "124.5%"
                }}
              >
                12 token
              </Text>
            </Flex>
            <Button
              style={{
                display: "flex",
                height: "39px",
                padding: "10px 20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "5px",
                border: "1px solid #FFF",
                background: "#FFF"
              }}
            >
              <Text
                style={{
                  color: "#06F",
                  fontFamily: "Inter",
                  fontSize: "15.06px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "14.632px"
                }}
              >
                Approve
              </Text>
            </Button>
          </div>
        </div>
      </Flex>
    </Page>
  )
}
