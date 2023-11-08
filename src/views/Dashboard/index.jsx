import { useState } from 'react'
import { ChainId } from '@pancakeswap/sdk'
import {
  Button,
  Text,
  useModal,
  Flex,
} from '@pancakeswap/uikit'

import useTheme from 'hooks/useTheme'

import Page from '../Page'

export const ACCESS_TOKEN_SUPPORT_CHAIN_IDS = [ChainId.BASE_TESTNET]


export default function Dashboard() {
  const [isChartExpanded, setIsChartExpanded] = useState(false)

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
        Dashboard
      </Flex>
      <Flex
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "14px",
          flexWrap: "wrap"
        }}
      >
        <Flex
          justifyContent="center"
          height="127px"
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
                15,698.08
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
                  USD
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
              Market Cap based (Circulating Supply)
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          height="127px"
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
                29,409.6
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
                  USD
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
              Total Value Locked (TVL)
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          height="127px"
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
                237,078.70
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
                  USD
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
              Circulating Supply
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          height="127px"
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
                15,698.08
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
                  USD
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
              CNTO Price
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <img
        src="./images/Ellipse.png"
        alt="img"
        style={{ width: '100vw', height: '108%', position: 'absolute', objectFit: 'cover', zIndex: -999 }}
      />
      <Flex
        style={{
          width: '100%',
          fontFamily: 'Inter',
          fontSize: '18px',
          marginLeft: '10px',
          marginTop: '40px',
          marginBottom: '20px',
          fontWeight: 500
        }}
      >
        Dashboard
      </Flex>
      <Flex
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px"
        }}
      >
        <Flex
          justifyContent="center"
          height="467px"
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
            <img src="./images/image1.png" alt="img" width="239px" height="204px" />
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
                  DUBY <span style={{ color: "#1F44F1" }}>Exchange</span>
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
                  Swap any tokens with ease, empowering your crypto journey with efficiency and convenience.
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
                  Go to Exchange
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
          height="467px"
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
            <img src="./images/image2.png" alt="img" width="239px" height="204px" />
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
                  DUBY <span style={{ color: "#1F44F1" }}>Exchange</span>
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
                  Swap any tokens with ease, empowering your crypto journey with efficiency and convenience.
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
                  Go to Exchange
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
          height="467px"
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
            <img src="./images/image3.png" alt="img" width="239px" height="204px" />
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
                  DUBY <span style={{ color: "#1F44F1" }}>Exchange</span>
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
                  Swap any tokens with ease, empowering your crypto journey with efficiency and convenience.
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
                  Go to Exchange
                </Text>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M0 8.5H17M17 8.5L9.47541 1.5M17 8.5L9.47541 15.5" stroke="#1F44F1" strokeWidth="2"/>
                </svg>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <div
        style={{
          position: "sticky",
          right: "38px",
          bottom: "38px",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          zIndex : "999"
        }}
      >
        <Flex
          style={{
            maxWidth: "394px",
            padding: "36px",
            borderRadius: "11px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "#1F44F1"
          }}
        >
          <Flex
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}
            >
              Max Supply: 1 Million CNTO
            </Text>
            <Text
              style={{
                alignSelf: "stretch",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "177.523%"
              }}
            >
              Max Supply: 1 million CNTO tokens - A limited and valuable cryptocurrency offering.
            </Text>
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
                background: "#06F"
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontFamily: "Inter",
                  fontSize: "15.06px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "14.632px"
                }}
              >
                Unlock Wallet
              </Text>
            </Button>
          </Flex>
          <Button style={{ position: "absolute", right: "10px", top: "10px", height: "15px", padding: "0", backgroundColor: "transparent" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M1 1L14 14M14 1L1 14" stroke="white"/>
            </svg>
          </Button>
        </Flex>
      </div>
    </Page>
  )
}
