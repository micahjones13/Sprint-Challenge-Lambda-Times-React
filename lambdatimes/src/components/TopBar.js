import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarStyle = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
    span{
      align-self: flex-end;
      font-size: 11px;
      font-weight: bold;
      letter-spacing: 1px;
    }
`;
const Container = styled.div `
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
    span{
      cursor: pointer;
      margin-right: 5%;
        &:hover{
          text-decoration: underline;
        }
    }
    
`;

const ContainerLeft = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerCenter = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  span{
    cursor: pointer;
    margin-right: 5%;
  }
`;

const ContainerRight = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
    span{
      cursor: pointer;
    }
`;

const TopBar = () => {
  return (
    <TopBarStyle>
      <Container>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>
      </Container>
    </TopBarStyle>
  )
}

export default TopBar;


// const TopBar = () => {
//   return (
//     <div className="top-bar">
//       <div className="container">
//         <div className="container-left">
//           <span>TOPICS</span><span>SEARCH</span>
//         </div>
//         <div className="container-center">
//           <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
//         </div>
//         <div className="container-right">
//           <span>LOG IN</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// const TopBar = () => {
//   return (
//     <TopBarStyle>
//       <Container>
//         <ContainerLeft>
//           <span>TOPICS</span><span>SEARCH</span>
//         </ContainerLeft>
//         <ContainerCenter>
//           <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
//         </ContainerCenter>
//         <ContainerRight>
//           <span>LOG IN</span>
//         </ContainerRight>
//       </Container>
//     </TopBarStyle>
//   )
// }