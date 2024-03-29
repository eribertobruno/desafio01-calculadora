import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row, Column } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (number) =>{
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== ''){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        default: 
          break;
      }
    }
  }
  

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}  />
          <Button label="8" onClick={() => handleAddNumber('8')}  />
          <Button label="9" onClick={() => handleAddNumber('9')}  />
          <Button label="/" onClick={() => handleAddNumber('/')}  />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}  />
          <Button label="5" onClick={() => handleAddNumber('5')}  />
          <Button label="6" onClick={() => handleAddNumber('6')}  />
          <Button label="x" onClick={() => handleAddNumber('x')}  />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}  />
          <Button label="8" onClick={() => handleAddNumber('8')}  />
          <Button label="9" onClick={() => handleAddNumber('9')}  />
          <Button label="-" onClick={handleMinusNumbers}  />
        </Row>
        <Row>
          <Button label="C" onClick={handleOnClear}  />
          <Button label="0" onClick={() => handleAddNumber('0')}  />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
