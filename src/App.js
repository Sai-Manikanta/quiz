import { Switch, Route } from "react-router-dom";
  
// Pages components
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/quiz/:id" component={Quiz} />
                <Route path="/result" component={Result} />
            </Switch>
        </div>
    )
}

export default App
