import React from 'react';
import Title from './components/Title.jsx';
import Text from './components/Text.jsx';
import Button from './components/Button.jsx';

function App() {
  return (
    <div className="App">
      <div className="flex justify-around  ">
        <div className="Titles flex flex-col">
          <h1 class="text-white text-5xl font-normal font-['Jaro'] ">Titles</h1>
          <Title variant="h1">TYPOGRAPHY JARO</Title>
          <Title variant="h2">TYPOGRAPHY JARO</Title>
          <Title variant="h3">TYPOGRAPHY JARO</Title>
          <Title variant="highlighted">TYPOGRAPHY JARO</Title>
        </div>
        <div className="Buttons flex flex-col">
          <Button>Button</Button>
        </div>
        <div className="Texts flex flex-col">
        <h1 className="text-white text-5xl font-normal font-['Jaro'] ">Texts</h1>
          <Text variant="default">TYPOGRAPHY JARO</Text>
          <Text variant="arial_nova_grey">Arial Nova</Text>
          <Text variant="arial_nova_purple">Arial Nova</Text>
        </div>
      </div>
    </div>
  );
}

export default App;

