import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/componentes/QuizBackground';
import QuizLogo from '../src/componentes/QuizLogo';
import GitHubCorner from '../src/componentes/GithubCorner';
import Footer from '../src/componentes/Footer';
import Widget from '../src/componentes/Widget';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  const router = useRouter();
  var [name,setName] = React.useState('');

  return (
  <QuizBackground backgroundImage={db.bg}>
    <QuizContainer>
      <QuizLogo/>
      <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (evento){
                evento.preventDefault();
                router.push(`/quiz?name${name}`);
            }}>
              <input 
                onChange={function (evento){
                  //name = evento.target.value;
                  setName(evento.target.value);
                }}
                placeholder="Digite seu nome"
              />
              <input placeholder="Qual teu elemento favorito"></input>
              <button type="submit" disabled={name.length == 0}>
                Quiz! {name}
              </button>
            </form> 
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Eu ainda vou mudar a página, calma</p>
          </Widget.Content>
        </Widget>
      <Footer/>
    </QuizContainer>
    <GitHubCorner projectUrl="https://github.com/vanni-gio" />
  </QuizBackground>
  );
}
//https://quiz-do-avatar-imersaoalura.vercel.app/