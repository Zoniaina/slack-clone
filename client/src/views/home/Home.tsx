import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Sidebar from '../../components/Sidebar/Sidebar';

function Home() {
  return (
    <HomeContainer>
      <Header />
      <Container>
        <Sidebar />
        <MainContent />
      </Container>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(20%, 25%) 1fr;
  height: 100%;
`;
