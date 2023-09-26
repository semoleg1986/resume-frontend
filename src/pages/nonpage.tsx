import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { ROOT_PAGE } from '../router';



const NonePage = styled.div`
    height: 100vh;
    background: #0f0f0f;
    padding: 4rem;
    text-align: center;
`;
const NonePageText = styled.h1`
    font-size: 10rem;
    color: #fff;
`;

const NonePageLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #10a710;
  }
`

function NotFoundPage() {
  return (
    <NonePage>
      <NonePageText>404</NonePageText>
      <NonePageLink to={ROOT_PAGE}>Back to Home</NonePageLink>
    </NonePage>
  );
}

export default NotFoundPage;
