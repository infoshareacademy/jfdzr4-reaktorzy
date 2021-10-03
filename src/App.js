import { ProgressBar } from './components/ProgressBar/Index'

import {Tiles} from './components/tiles/Tiles'


function App() {
  return (
    <>
    <Tiles/>
    <ProgressBar progressLevel={2} />
    </>
  );
}

export default App;
