import { Text } from 'react-native';
import * as S from './styles';
import { Header } from '@components/Header';
import { useState } from 'react';

export function Home() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Text>Home</Text>
      </S.Content>
    </S.Container>    
  );
}

