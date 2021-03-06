import React from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Image, Card, CardBody } from '@lydiafinance/uikit'
import { useWinningNumbers, useMatchingRewardLength } from 'hooks/useTickets'
import { useTranslation } from 'contexts/Localization'
import useGetLotteryHasDrawn from 'hooks/useGetLotteryHasDrawn'

const WinningNumbers: React.FC = () => {
  const { account } = useWeb3React()
  const winNumbers = useWinningNumbers()
  const lotteryHasDrawn = useGetLotteryHasDrawn()
  const MatchedNumber4 = useMatchingRewardLength(4)
  const MatchedNumber3 = useMatchingRewardLength(3)
  const MatchedNumber2 = useMatchingRewardLength(2)
  const { t } = useTranslation()

  return (
    <CardWrapper>
      <Card>
        <CardBody>
          <StyledCardContentInner>
            <StyledCardHeader>
              <Title>
                {account && lotteryHasDrawn ? `🥳${t('Winning Numbers This Round')}🥳` : t('Latest Winning Numbers')}
              </Title>
              <br />
            </StyledCardHeader>
            <Row>
              {winNumbers.map((number, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <TicketNumberBox key={index}>
                  <CenteredText>{number}</CenteredText>
                </TicketNumberBox>
              ))}
            </Row>
            <RabbitRow>
              <RabbitBox>
                <CardImageFirst>
                  <Image src="/images/lottery-girl.png" alt="Number 1" width={150} height={190} responsive />
                </CardImageFirst>
              </RabbitBox>
              <RabbitBox>
                <CardImage style={{ marginLeft: '-1em' }}>
                  <Image src="/images/lottery-girl.png" alt="Number 2" width={150} height={190} responsive />
                </CardImage>
              </RabbitBox>
              <RabbitBox>
                <CardImage style={{ marginLeft: '-1em' }}>
                  <Image src="/images/lottery-girl.png" alt="Number 3" width={150} height={190} responsive />
                </CardImage>
              </RabbitBox>
              <RabbitBox>
                <CardImage style={{ marginLeft: '-1em' }}>
                  <Image src="/images/lottery-girl.png" alt="Number 4" width={150} height={190} responsive />
                </CardImage>
              </RabbitBox>
            </RabbitRow>
            {/* <RabbitRowSmall>
              <RabbitBoxSmall>
                <CardImageFirst>
                  <Image src="/images/lottery-girl.png" alt="Number 1" width={150} height={190} responsive />
                </CardImageFirst>
              </RabbitBoxSmall>
              <RabbitBoxSmall>
                <CardImage style={{ marginLeft: '-1em' }}>
                  <Image src="/images/lottery-girl.png" alt="Number 2" width={150} height={190} responsive />
                </CardImage>
              </RabbitBoxSmall>
              <RabbitBoxSmall>
                <CardImage style={{ marginLeft: '-1em' }}>
                  <Image src="/images/lottery-girl.png" alt="Number 3" width={150} height={190} responsive />
                </CardImage>
              </RabbitBoxSmall>
              <RabbitBoxSmall>
                <CardImage style={{ marginLeft: '-1em' }}>
                  <Image src="/images/lottery-girl.png" alt="Number 4" width={150} height={190} responsive />
                </CardImage>
              </RabbitBoxSmall>
            </RabbitRowSmall> */}
            <Column>
              <RowNoPadding>
                <CenteredTextWithPadding>{t('Tickets matching 4 numbers:')}</CenteredTextWithPadding>
                <CenteredTextWithPadding>
                  <strong>{MatchedNumber4}</strong>
                </CenteredTextWithPadding>
              </RowNoPadding>
              <RowNoPadding>
                <CenteredTextWithPadding>{t('Tickets matching 3 numbers:')}</CenteredTextWithPadding>
                <CenteredTextWithPadding>
                  <strong>{MatchedNumber3}</strong>
                </CenteredTextWithPadding>
              </RowNoPadding>
              <RowNoPadding>
                <CenteredTextWithPadding>{t('Tickets matching 2 numbers:')}</CenteredTextWithPadding>
                <CenteredTextWithPadding>
                  <strong>{MatchedNumber2}</strong>
                </CenteredTextWithPadding>
              </RowNoPadding>
            </Column>
            <Link href="https://api.lydia.finance/api/lottery?page=0&pageSize=25" target="_blank">
              {t('Export recent winning numbers')}
            </Link>
          </StyledCardContentInner>
        </CardBody>
      </Card>
    </CardWrapper>
  )
}
const Link = styled.a`
  margin-top: 1em;
  text-decoration: none;
  color: #15b0f8;
`

const Row = styled.div`
  margin-top: 1em;
  align-items: center;
  display: flex;
  flex-direction: row;
`

const RabbitRow = styled.div`
  margin-top: -3.6em;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: 61px;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`

const RabbitRowSmall = styled.div`
  margin-top: -3.5em;
  align-items: center;
  display: flex;
  flex-direction: row;

  @media (min-width: 768px) {
    display: none;
  }
`

const CardImage = styled.div`
  text-align: center;
`

const CardImageFirst = styled.div`
  text-align: center;
  margin-left: -1em;

  @media (max-width: 600) {
    margin-left: -0.2em;
  }
`

const RowNoPadding = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  margin-top: 1em;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const CenteredText = styled.div`
  text-align: center;
  align-items: center;
`

const CenteredTextWithPadding = styled.div`
  text-align: center;
  align-items: center;
  padding-left: 2px;
  padding-right: 2px;
`

const TicketNumberBox = styled.div`
  padding: 10px;
  border-radius: 12px;
  background: linear-gradient(0deg, #f5eaab 0%, #f9d92e 76.22%);
  color: white;
  font-size: 20px;
  font-weight: 900;
  margin: 10px;
  margin-bottom: 7px;
  width: 40px;
  z-index: 99;

  @media (min-width: 768px) {
    font-size: 40px;
    margin: 20px;
    width: 60px;
  }
`

const RabbitBox = styled.div`
  /* padding: 10px; */
  border-radius: 12px;
  margin: 10px -15px;
  width: 130px;
`

const RabbitBoxSmall = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  border-radius: 12px;
  margin: 20px;
  width: 20px;
`

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const CardWrapper = styled.div``

const Title = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 24px;
  width: 50vw;
  text-align: center;
  font-weight: 1000;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default WinningNumbers
