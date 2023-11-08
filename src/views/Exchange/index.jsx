import { useState } from 'react'
import { ChainId } from '@pancakeswap/sdk'
import {
  Button,
  Text,
  useModal,
  Flex,
  useMatchBreakpoints
} from '@pancakeswap/uikit'

import useTheme from 'hooks/useTheme'

import Page from '../Page'

export const ACCESS_TOKEN_SUPPORT_CHAIN_IDS = [ChainId.BASE_TESTNET]


export default function Exchange() {
  const [isChartExpanded, setIsChartExpanded] = useState(false)

  const { isDark } = useTheme()
  const { isMobile } = useMatchBreakpoints()

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
          marginBottom: '20px',
          fontWeight: 700,
        }}
      >
        Exchange
      </Flex>
      <img
        src="./images/Ellipse.png"
        alt="img"
        style={{ width: '100vw', height: '108%', position: 'absolute', objectFit: 'cover', zIndex: -999 }}
      />
      <Flex flexDirection="column" width="100%">
        <Flex
          width="100%"
          height="49px"
          alignItems="center"
          padding="12px 24px"
          borderRadius="10px 10px 0 0"
          background="#1F44F1"
        >
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "15.9px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              flex: isMobile ? "3" : "5"
            }}
          >
            Pool
          </Text>
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "15.9px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              flex: "3"
            }}
          >
            APR
          </Text>
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "15.9px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              flex: "2"
            }}
          >
            Action
          </Text>
        </Flex>
        <Flex
          style={{
            width: "100%",
            padding: "16px 24px",
            height: "66px",
            borderRadius: "10px",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.20)" : "1px solid #FFF",
            background: isDark ? "rgba(255, 255, 255, 0.00)" : "rgba(255, 255, 255, 0.30)",
            alignItems: "center"
          }}
        >
          <Flex
            style={{
              alignItems: "center",
              gap: isMobile ? "0" : "42px",
              flex: isMobile ? "3" : "5"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="34" viewBox="0 0 60 34" fill="none">
              <ellipse cx="41.5801" cy="17" rx="17.5" ry="17" fill="#E70C6A"/>
              <path d="M34.54 17C34.54 26.0991 26.9426 33.5 17.54 33.5C8.13744 33.5 0.540039 26.0991 0.540039 17C0.540039 7.90087 8.13744 0.5 17.54 0.5C26.9426 0.5 34.54 7.90087 34.54 17Z" fill="#0C0C5C" stroke="white"/>
            </svg>
            {!isMobile && <Text
              style={{
                color: isDark ? "#FFF" : "#000",
                fontFamily: "Inter",
                fontSize: "17.478px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"                
              }}
            >
              CNTO-stOSMO Pool
            </Text>}
          </Flex>
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              fontFamily: "Inter",
              fontSize: "16.167px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              flex: "3"
            }}
          >
            168.69 %
          </Text>
          <Button
            style={{
              height: "32px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#249D3C",
              flex: "2"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "13.631px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}
            >
              Select
            </Text>
          </Button>
        </Flex>
        <Flex
          style={{
            width: "100%",
            padding: "16px 24px",
            height: "66px",
            borderRadius: "10px",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.20)" : "1px solid #FFF",
            background: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.10)",
            alignItems: "center"
          }}
        >
          <Flex
            style={{
              alignItems: "center",
              gap: isMobile ? "0" : "42px",
              flex: isMobile ? "3" : "5"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="34" viewBox="0 0 60 34" fill="none">
              <ellipse cx="41.54" cy="17" rx="17.5" ry="17" fill="#E70C6A"/>
              <path d="M34.54 17C34.54 26.0991 26.9426 33.5 17.54 33.5C8.13744 33.5 0.540039 26.0991 0.540039 17C0.540039 7.90087 8.13744 0.5 17.54 0.5C26.9426 0.5 34.54 7.90087 34.54 17Z" fill="#0C0C5C" stroke="white"/>
            </svg>
            {!isMobile && <Text
              style={{
                color: isDark ? "#FFF" : "#000",
                fontFamily: "Inter",
                fontSize: "17.478px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"                
              }}
            >
              CNTO-stATOM Pool
            </Text>}
          </Flex>
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              fontFamily: "Inter",
              fontSize: "16.167px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              flex: "3"
            }}
          >
            184.30 %
          </Text>
          <Button
            style={{
              height: "32px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#249D3C",
              flex: "2"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "13.631px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}
            >
              Select
            </Text>
          </Button>
        </Flex>
        <Flex
          style={{
            width: "100%",
            padding: "16px 24px",
            height: "66px",
            borderRadius: "10px",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.20)" : "1px solid #FFF",
            background: isDark ? "rgba(255, 255, 255, 0.00)" : "rgba(255, 255, 255, 0.30)",
            alignItems: "center"
          }}
        >
          <Flex
            style={{
              alignItems: "center",
              gap: isMobile ? "0" : "42px",
              flex: isMobile ? "3" : "5"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="34" viewBox="0 0 60 34" fill="none">
              <ellipse cx="41.54" cy="17" rx="17.5" ry="17" fill="#E70C6A"/>
              <path d="M34.54 17C34.54 26.0991 26.9426 33.5 17.54 33.5C8.13744 33.5 0.540039 26.0991 0.540039 17C0.540039 7.90087 8.13744 0.5 17.54 0.5C26.9426 0.5 34.54 7.90087 34.54 17Z" fill="#0C0C5C" stroke="white"/>
            </svg>
            {!isMobile && <Text
              style={{
                color: isDark ? "#FFF" : "#000",
                fontFamily: "Inter",
                fontSize: "17.478px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"                
              }}
            >
              CNTO-stOSMO Pool
            </Text>}
          </Flex>
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              fontFamily: "Inter",
              fontSize: "16.167px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              flex: "3"
            }}
          >
            168.69 %
          </Text>
          <Button
            style={{
              height: "32px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#249D3C",
              flex: "2"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "13.631px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}
            >
              Select
            </Text>
          </Button>
        </Flex>
        <Flex
          style={{
            width: "100%",
            padding: "16px 24px",
            height: "66px",
            borderRadius: "10px",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.20)" : "1px solid #FFF",
            background: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.10)",
            alignItems: "center"
          }}
        >
          <Flex
            style={{
              alignItems: "center",
              gap: isMobile ? "0" : "42px",
              flex: isMobile ? "3" : "5"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="34" viewBox="0 0 60 34" fill="none">
              <ellipse cx="41.54" cy="17" rx="17.5" ry="17" fill="#112642"/>
              <path d="M34.54 17C34.54 26.0991 26.9426 33.5 17.54 33.5C8.13744 33.5 0.540039 26.0991 0.540039 17C0.540039 7.90087 8.13744 0.5 17.54 0.5C26.9426 0.5 34.54 7.90087 34.54 17Z" fill="#0C0C5C" stroke="white"/>
            </svg>
            {!isMobile && <Text
              style={{
                color: isDark ? "#FFF" : "#000",
                fontFamily: "Inter",
                fontSize: "17.478px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"                
              }}
            >
              CNTO-ACRE Pool
            </Text>}
          </Flex>
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              fontFamily: "Inter",
              fontSize: "16.167px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              flex: "3"
            }}
          >
            253.71 %
          </Text>
          <Button
            style={{
              height: "32px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#249D3C",
              flex: "2"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "13.631px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}
            >
              Select
            </Text>
          </Button>
        </Flex>
        <Flex
          style={{
            width: "100%",
            padding: "16px 24px",
            height: "66px",
            borderRadius: "10px",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.20)" : "1px solid #FFF",
            background: isDark ? "rgba(255, 255, 255, 0.00)" : "rgba(255, 255, 255, 0.30)",
            alignItems: "center"
          }}
        >
          <Flex
            style={{
              alignItems: "center",
              gap: isMobile ? "0" : "42px",
              flex: isMobile ? "3" : "5"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="34" viewBox="0 0 60 34" fill="none">
              <ellipse cx="41.54" cy="17" rx="17.5" ry="17" fill="#112642"/>
              <path d="M34.54 17C34.54 26.0991 26.9426 33.5 17.54 33.5C8.13744 33.5 0.540039 26.0991 0.540039 17C0.540039 7.90087 8.13744 0.5 17.54 0.5C26.9426 0.5 34.54 7.90087 34.54 17Z" fill="#0C0C5C" stroke="white"/>
            </svg>
            {!isMobile && <Text
              style={{
                color: isDark ? "#FFF" : "#000",
                fontFamily: "Inter",
                fontSize: "17.478px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"                
              }}
            >
              CNTO-USDC Pool
            </Text>}
          </Flex>
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              fontFamily: "Inter",
              fontSize: "16.167px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              flex: "3"
            }}
          >
            178.88 %
          </Text>
          <Button
            style={{
              height: "32px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#249D3C",
              flex: "2"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "13.631px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}
            >
              Select
            </Text>
          </Button>
        </Flex>
        <Flex
          style={{
            width: "100%",
            padding: "16px 24px",
            height: "66px",
            borderRadius: "10px",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.20)" : "1px solid #FFF",
            background: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.10)",
            alignItems: "center"
          }}
        >
          <Flex
            style={{
              alignItems: "center",
              gap: isMobile ? "0" : "42px",
              flex: isMobile ? "3" : "5"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="34" viewBox="0 0 60 34" fill="none">
              <ellipse cx="41.54" cy="17" rx="17.5" ry="17" fill="#6E4CC2"/>
              <path d="M34.54 17C34.54 26.0991 26.9426 33.5 17.54 33.5C8.13744 33.5 0.540039 26.0991 0.540039 17C0.540039 7.90087 8.13744 0.5 17.54 0.5C26.9426 0.5 34.54 7.90087 34.54 17Z" fill="#0C0C5C" stroke="white"/>
            </svg>
            {!isMobile && <Text
              style={{
                color: isDark ? "#FFF" : "#000",
                fontFamily: "Inter",
                fontSize: "17.478px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"                
              }}
            >
              CNTO-ATOM Pool
            </Text>}
          </Flex>
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              fontFamily: "Inter",
              fontSize: "16.167px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              flex: "3"
            }}
          >
            166.95 %
          </Text>
          <Button
            style={{
              height: "32px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#249D3C",
              flex: "2"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "13.631px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}
            >
              Select
            </Text>
          </Button>
        </Flex>
        <Flex
          style={{
            width: "100%",
            padding: "16px 24px",
            height: "66px",
            borderRadius: "10px",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.20)" : "1px solid #FFF",
            background: isDark ? "rgba(255, 255, 255, 0.00)" : "rgba(255, 255, 255, 0.30)",
            alignItems: "center"
          }}
        >
          <Flex
            style={{
              alignItems: "center",
              gap: isMobile ? "0" : "42px",
              flex: isMobile ? "3" : "5"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="34" viewBox="0 0 60 34" fill="none">
              <ellipse cx="41.54" cy="17" rx="17.5" ry="17" fill="#320D71"/>
              <path d="M34.54 17C34.54 26.0991 26.9426 33.5 17.54 33.5C8.13744 33.5 0.540039 26.0991 0.540039 17C0.540039 7.90087 8.13744 0.5 17.54 0.5C26.9426 0.5 34.54 7.90087 34.54 17Z" fill="#0C0C5C" stroke="white"/>
            </svg>
            {!isMobile && <Text
              style={{
                color: isDark ? "#FFF" : "#000",
                fontFamily: "Inter",
                fontSize: "17.478px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"                
              }}
            >
              CNTO-OSMO Pool
            </Text>}
          </Flex>
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              fontFamily: "Inter",
              fontSize: "16.167px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              flex: "3"
            }}
          >
            206.92 %
          </Text>
          <Button
            style={{
              height: "32px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#249D3C",
              flex: "2"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "13.631px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}
            >
              Select
            </Text>
          </Button>
        </Flex>
        <Flex
          style={{
            width: "100%",
            padding: "16px 24px",
            height: "66px",
            borderRadius: "10px",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.20)" : "1px solid #FFF",
            background: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.10)",
            alignItems: "center"
          }}
        >
          <Flex
            style={{
              alignItems: "center",
              gap: isMobile ? "0" : "42px",
              flex: isMobile ? "3" : "5"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="34" viewBox="0 0 60 34" fill="none">
              <ellipse cx="41.54" cy="17" rx="17.5" ry="17" fill="#F3B22A"/>
              <path d="M34.54 17C34.54 26.0991 26.9426 33.5 17.54 33.5C8.13744 33.5 0.540039 26.0991 0.540039 17C0.540039 7.90087 8.13744 0.5 17.54 0.5C26.9426 0.5 34.54 7.90087 34.54 17Z" fill="#0C0C5C" stroke="white"/>
            </svg>
            {!isMobile && <Text
              style={{
                color: isDark ? "#FFF" : "#000",
                fontFamily: "Inter",
                fontSize: "17.478px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"                
              }}
            >
              CNTO-WBNB Pool
            </Text>}
          </Flex>
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              fontFamily: "Inter",
              fontSize: "16.167px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              flex: "3"
            }}
          >
            236.15 %
          </Text>
          <Button
            style={{
              height: "32px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#249D3C",
              flex: "2"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "13.631px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}
            >
              Select
            </Text>
          </Button>
        </Flex>
        <Flex
          style={{
            width: "100%",
            padding: "16px 24px",
            height: "66px",
            borderRadius: "10px",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.20)" : "1px solid #FFF",
            background: isDark ? "rgba(255, 255, 255, 0.00)" : "rgba(255, 255, 255, 0.30)",
            alignItems: "center"
          }}
        >
          <Flex
            style={{
              alignItems: "center",
              gap: isMobile ? "0" : "42px",
              flex: isMobile ? "3" : "5"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="34" viewBox="0 0 60 34" fill="none">
              <ellipse cx="41.54" cy="17" rx="17.5" ry="17" fill="#E53A35"/>
              <path d="M34.54 17C34.54 26.0991 26.9426 33.5 17.54 33.5C8.13744 33.5 0.540039 26.0991 0.540039 17C0.540039 7.90087 8.13744 0.5 17.54 0.5C26.9426 0.5 34.54 7.90087 34.54 17Z" fill="#0C0C5C" stroke="white"/>
            </svg>
            {!isMobile && <Text
              style={{
                color: isDark ? "#FFF" : "#000",
                fontFamily: "Inter",
                fontSize: "17.478px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"                
              }}
            >
              CNTO-WAVAX Pool
            </Text>}
          </Flex>
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              fontFamily: "Inter",
              fontSize: "16.167px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              flex: "3"
            }}
          >
            238.57 %
          </Text>
          <Button
            style={{
              height: "32px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#249D3C",
              flex: "2"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "13.631px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}
            >
              Select
            </Text>
          </Button>
        </Flex>
        <Flex
          style={{
            width: "100%",
            padding: "16px 24px",
            height: "66px",
            borderRadius: "10px",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.20)" : "1px solid #FFF",
            background: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.10)",
            alignItems: "center"
          }}
        >
          <Flex
            style={{
              alignItems: "center",
              gap: isMobile ? "0" : "42px",
              flex: isMobile ? "3" : "5"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="34" viewBox="0 0 60 34" fill="none">
              <ellipse cx="41.54" cy="17" rx="17.5" ry="17" fill="#773FEA"/>
              <path d="M34.54 17C34.54 26.0991 26.9426 33.5 17.54 33.5C8.13744 33.5 0.540039 26.0991 0.540039 17C0.540039 7.90087 8.13744 0.5 17.54 0.5C26.9426 0.5 34.54 7.90087 34.54 17Z" fill="#0C0C5C" stroke="white"/>
            </svg>
            {!isMobile && <Text
              style={{
                color: isDark ? "#FFF" : "#000",
                fontFamily: "Inter",
                fontSize: "17.478px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"                
              }}
            >
              CNTO-WMATIC Pool
            </Text>}
          </Flex>
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              fontFamily: "Inter",
              fontSize: "16.167px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              flex: "3"
            }}
          >
            230.48 %
          </Text>
          <Button
            style={{
              height: "32px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#249D3C",
              flex: "2"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "13.631px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}
            >
              Select
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Page>
  )
}
