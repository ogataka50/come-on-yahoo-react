import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Ranking from './components/Ranking';


class App extends Component {
    render() {
        return (
            <div className="App">
                <ul>
                    <li><Link to='/all'>すべてのカテゴリ</Link></li>
                    <li><Link to='/category/2502'>PC, 周辺機器</Link></li>
                    <li><Link to='/category/10002'>本、雑誌</Link></li>
                </ul>
                <Route path="/all" component={Ranking}/>
                <Route
                    path="/category/:id"
                    render={
                        ({match}) => <Ranking categoryId={match.params.id}/>
                    }
                />
            </div>
        );
    }
}

export default App;
