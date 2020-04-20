import React from 'react';

import { ProjectInfo} from "./definitions/ProjectInfo";
import Layout from './components/Layout';

function App() {
  return (
    <Layout projectInfo={ProjectInfo} />
  );
}

export default App;
