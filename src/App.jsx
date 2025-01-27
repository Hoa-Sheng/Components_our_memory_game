import React from 'react';
import Title from './components/Title.jsx';
import Text from './components/Text.jsx';

function App() {
  return (
    <div className="App">
      <div class="flex">
        <div className="Title">
          <h1 class="text-white text-5xl font-normal font-['Jaro'] ">Titles</h1>
          <Title variant="h1">TYPOGRAPHY JARO</Title>
          <Title variant="h2">TYPOGRAPHY JARO</Title>
          <Title variant="h3">TYPOGRAPHY JARO</Title>
          <Title variant="highlighted">TYPOGRAPHY JARO</Title>
        </div>
        <div className="Texts">
        <h1 class="text-white text-5xl font-normal font-['Jaro'] ">Texts</h1>
          <Text variant="default">TYPOGRAPHY JARO</Text>
          <Text variant="default">TYPOGRAPHY JARO</Text>
          <Text variant="default">TYPOGRAPHY JARO</Text>
        </div>
      </div>
    </div>
  );
}

export default App;

