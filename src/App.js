import {Switch, Route, } from 'react-router-dom';
import empTable from './componenets/empTable';
import EmployeeForm from './componenets/Form'

function App() {
  return (
    <div className="App">

      <EmployeeForm />
       <Switch>
          <Route exact path="/employees" component={empTable} />
       </Switch>
    </div>
  );
}

export default App;
