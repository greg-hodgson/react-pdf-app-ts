import './App.css';
import FilterableTable from './components/FilterableTable';
import useGetAirtableData from './hooks/useGetAirtableData';

type ProcessEnv = string;

function App() {
  
  const reactAppBaseID: ProcessEnv = (process.env.REACT_APP_BASE_ID as string);

  const data = useGetAirtableData(reactAppBaseID, 'Lead');

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo"></div>
        <FilterableTable data={data}/>
      </header>
    </div>
  );
}

export default App;
