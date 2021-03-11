import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Editor from './Editor';
import Search from './Search';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/imageedit">
          <div className="heading">
              Name: Tanmay Tripathi<br/>
              Email: wills4986@gmail.com
            </div>
            <Link to = "/" style={{ textDecoration: "none" }}>
              <h1 className='f6 f2-m f-subheadline-l fw2 tc'>Imagify : Fabric JS</h1>
            </Link>
            <Editor />
          </Route>
          <Route path="/">
            <div className="heading">
              Name: Tanmay Tripathi<br/>
              Email: wills4986@gmail.com
            </div>
            <h1 className='f6 f2-m f-subheadline-l fw2 tc'>Imagify</h1>
            <Search />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
