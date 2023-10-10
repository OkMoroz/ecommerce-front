import Center from "@/components/Center";
import styled from "styled-components";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  /* @media screen and (min-width: 768px) {
    font-size: 3rem;
  } */
`;

const Desc = styled.p`
color:#aaa;
font-size:.8rem;
`

const Wrapper = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
`
export default function Featured({ product }) {
    return (
      <Bg>
        <Center>
          <Wrapper>
            <div>
              <Title>Pro anywhere</Title>
              <Desc>
                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem
                ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </Desc>
            </div>
            <div></div>
          </Wrapper>
        </Center>
      </Bg>
    );
}