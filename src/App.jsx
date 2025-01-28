import React from 'react';
import Title from './components/Title.jsx';
import Text from './components/Text.jsx';
import Button from './components/Button.jsx';
import Color from './components/Color.jsx';
import Tiles from './components/Tiles.jsx';

function App() {
  return (
    <div className="App px-10 py-5">
      <div className="flex justify-evenly flex-wrap p-5 ">
        <div className="Titles">
          <h1 className="text-white text-5xl font-normal font-['Jaro'] ">Titles</h1>
          <div>
            <Title variant="h1">TYPOGRAPHY JARO</Title>
            <p className ="font-['Jaro'] text-white">96 Regular</p>
          </div>
          <div classname= "py-[10px]">
            <Title variant="h2">TYPOGRAPHY JARO</Title>
            <p className ="font-['Jaro'] text-white">64 Regular</p>
          </div>
          <div classname= "py-[10px]">
            <Title variant="h3">TYPOGRAPHY JARO</Title>
            <p className ="font-['Jaro'] text-white">48 Regular</p>
          </div>
          <div classname= "py-[10px]">
            <Title variant="highlighted">TYPOGRAPHY JARO</Title>
            <p className ="font-['Jaro'] text-white">40 Regular</p>
          </div>
        </div>
        <div className="Buttons flex flex-col justify-evenly">
          <Button>Button</Button>
          <Tiles></Tiles>
        </div>
        <div className="Texts flex flex-col">
          <h1 className="text-white text-5xl font-normal font-['Jaro'] ">Texts</h1>
          <Text variant="default">TYPOGRAPHY JARO</Text>
          <p className ="font-['Jaro'] text-white">32 Regular</p>
          <Text variant="arial_nova_grey">Arial Nova</Text>
          <p className ="font-['Jaro'] text-white">32 Regular</p>
          <Text variant="arial_nova_purple">Arial Nova</Text>
          <p className ="font-['Jaro'] text-white">32 Regular</p>
        </div>
      </div>
      <div className="Colors flex flex-col justify-evenly items-center ">
          <h1 className="text-white text-5xl font-normal font-['Jaro'] ">Colors : </h1>
          <div className="flex flex-row mx-10">
            <div>
              <Color variant="White-1"></Color>
              <p className ="font-['Jaro'] text-white">FFFFFF</p>
              <Color variant="White-2"></Color>
              <p className ="font-['Jaro'] text-white">B5B5B5</p>
              <Color variant="Gray"></Color>
              <p className ="font-['Jaro'] text-white">767379</p>
              <Color variant="Gray-blue"></Color>
              <p className ="font-['Jaro'] text-white">435077</p>
            </div>
            <div>
              <Color variant="Blue"></Color>
              <p className ="font-['Jaro'] text-white">26266F</p>
              <Color variant="Purple-1"></Color>
              <p className ="font-['Jaro'] text-white">31275D</p>
              <Color variant="Pink-1"></Color>
              <p className ="font-['Jaro'] text-white">C571B0</p>
              <Color variant="Pink-2"></Color>
              <p className ="font-['Jaro'] text-white">805491</p>
            </div>
            <div>
              <Color variant="Magenta"></Color>
              <p className ="font-['Jaro'] text-white">4F3A75</p>
              <Color variant="Purple-2"></Color>
              <p className ="font-['Jaro'] text-white">483C7B</p>
              <Color variant="Burgundy"></Color>
              <p className ="font-['Jaro'] text-white">4D2468</p>
              <Color variant="Purple-3"></Color>
              <p className ="font-['Jaro'] text-white">3E275D</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;

