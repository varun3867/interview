import logo from './logo.svg';
import './App.css';
import Lifecycle from './ComponentLifeCycle/Lifecycle';
import ConnectingMongo from './ConnectingMongo';
import { UseEffectDemo } from './UseEffectDemo/UseEffectDemo';
import { UseEffectDemo2 } from './UseEffectDemo/UseEffectDemo2';
import { UseEffectDemo3 } from './UseEffectDemo/UseEffectDemo3';

function App() {
  return (
    <div className="App">
      {/* <UseEffectDemo3/> */}
      {/* <UseEffectDemo2/> */}
      {/* <UseEffectDemo/> */}
      <Lifecycle name="mee" />
      {/* <ConnectingMongo/> */}
    </div>
  );
}

export default App;
