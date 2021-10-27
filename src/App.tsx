import React from 'react';
import './App.css';

import useGetAirtableData from './useGetAirtableData';

type ProcessEnv = string | undefined;

function App() {

  const reactAppBaseID: ProcessEnv = process.env.REACT_APP_BASE_ID;

  const data = useGetAirtableData(reactAppBaseID, 'Lead');

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <th>Unique ids {`(there are ${data.length})`}</th>
          </tr>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
            </tr>
          ))}
        </table>
      </header>
    </div>
  );
}

export default App;
