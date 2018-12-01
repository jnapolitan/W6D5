import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

const TAB_PANES = [
  {title: "Julian", content: "Chex Mix is dope af"}, 
  {title: "Eric", content: "Where's the CSS?"}, 
  {title: "Sue", content: "My boyfriend...(fill in the blank)"}
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
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />, document.getElementById('root')
  );
});