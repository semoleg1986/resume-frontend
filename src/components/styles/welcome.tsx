import styled from 'styled-components';
import { motion } from "framer-motion";
import { AnimatedText } from '../AnimatedText';

const MainTitle = styled(motion.h1)`
    font-size: 2.5em;
    /* line-height: 1.5rem; */
    text-align: center;
    text-transform: uppercase;
    color: #fff;
`;
const Title = styled(motion.h3)`
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5em;
    /* line-height: 1.5rem; */
    text-align: center;
    text-transform: uppercase;
    color: #fff;
`;
const Text = styled(motion.div)`
    /* margin-top: 1em; */
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    line-height: 1.5rem;
    font-size: 1em;
    text-align: end;
    text-transform: uppercase;
    color: #fff;
    @media (max-width: 992px) {
        text-align: center;
  }

`;

const Span = styled.span`
    color: #10a710;
`;

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1em;
    padding: 7.63em 4em;
    background: #0f0f0f;
    @media (max-width: 992px) {
        grid-template-columns: 1fr;
  }
`;

const Block = styled.div`

`;




export default function Welcome() {
  return (
    <Wrapper>
        <Block>
            <MainTitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Oleg Semenov
            </MainTitle>
            <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Front-end <Span>developer</Span>
            </Title>
        </Block>
        <Block>     
            <Text>            
                <AnimatedText/>  
            </Text>
        </Block>
  </Wrapper>
  )
}
