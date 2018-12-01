import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

const TAB_PANES = [
  {title: "Julian", content: "Chex Mix is dope AF. Wat wat wat. Wut wut. Hello, my name is Julian. But you can call me Julian. Yawn yawn yawn. He's ready to go home. The solution's CSS is not as dope, so here we are."}, 
  {title: "Eric", content: "Where's the CSS? -webkit-background-text: transparent; for days"}, 
  {title: "Sue", content: "My boyfriend _. My boyfriend _. My boyfriend _. Wait, my boyfriend _. Also my boyfriend _."}
];

function Root() {
  return(
    <div>
      <div>
        <Clock />
      </div>
      <div className="tabsContainer">
        <Tabs panes={TAB_PANES}/>
      </div>
      <div className="weatherContainer">
      </div>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />, document.getElementById('root')
  );
});