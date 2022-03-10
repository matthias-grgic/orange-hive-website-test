import { useState } from 'react'
import styled from 'styled-components'

function AboutNav() {
  const [showMenuAbout, setShowMenuAbout] = useState(false)
  return (
    <Container>
      <ButtonStyled onClick={() => setShowMenuAbout((prev) => !prev)}>ÜBER UNS</ButtonStyled>
      <Menu status={showMenuAbout}>
        <ButtonStyled>PHILOSOPHIE</ButtonStyled>
        <ButtonStyled>GESCHÄFTSFÜHRUNG</ButtonStyled>
        <ButtonStyled>MITARBEITER</ButtonStyled>
      </Menu>
    </Container>
  )
}

export default AboutNav

const Container = styled.div`
  background-color: transparent;
`

const Menu = styled.div`
  display: ${(props) => (props.status === true ? 'flex' : 'none')};
  background-color: transparent;
  flex-direction: column;
  position: fixed;
`

const ButtonStyled = styled.div`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  font-size: clamp(1.5rem, 2vw, 3rem);
  &:hover {
    color: var(--third-color);
  }
`