import { useEffect } from 'react';
import './App.scss';
import Su from './components/Su'
import RenderProps from './components/RenderProps';
import Tree from './components/Tree/Tree'

function App(): JSX.Element {
  useEffect(() => {

  }, [])

    // 夜间模式
    const  switchingMode =()=>{
        document.querySelector('html')?.classList.toggle('night-root')
    }
  return (
    <div className="App">
      <h1 className='text-4xl bg-cyan  aaa text-center font-semibold'>1111</h1>
      <button onClick={switchingMode}>夜间模式切换</button>
      <Su />
      <Tree />
      <hr />
      RenderProps
      <RenderProps />
    </div>
  );
}

export default App;
