import React from "react";
import { Route, Switch, HashRouter} from 'react-router-dom';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/">
                    <h1>Hello World</h1>
                </Route>
            </Switch>
        </HashRouter>
    )
};

export default App;
