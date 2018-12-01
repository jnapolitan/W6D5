import React from 'react';

const IDX_MAP = {
  "Julian": 0,
  "Eric": 1,
  "Sue": 2
};

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.panes = this.props.panes;
    this.header = this.header.bind(this);
    this.displayContent = this.displayContent.bind(this);
    this.updateTab = this.updateTab.bind(this);
  }
  
  render() {
    const index = this.state.index;
    const content = this.panes[index].content;
    return (
      <div className="tabs">
        <div>
          {this.header(index)}
        </div>
        <div>{this.displayContent(content)}</div>
      </div>
    );
  }
  
  header(tabIdx) {
    let panes = this.panes;
    return (
      <div>
        {this.panes.map((pane) => {
          return <button className="title" onClick={this.updateTab}>{pane.title}</button>;
        })}
      </div>
    );
  }
  
  updateTab(e) {
    let currTabTitle = e.target.innerHTML;
    this.setState({index: IDX_MAP[currTabTitle] });
  }
  
  displayContent(content) {
    return (
      <p>{content}</p>
    );
  }  
}