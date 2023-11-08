import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 10px;
  max-width: 436px;
  width: 100%;
  z-index: 1;
  border: 1px solid rgba(31, 68, 241, 0.60);
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
