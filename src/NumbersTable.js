import React from 'react';
import './NumbersTable.css';

class NumbersTable extends React.Component {
  createTable = (num) => {
    const arr = [];
    console.log(this.props.limit);
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0) arr.push(<div className="red box">{i}</div>);
      else arr.push(<div className="box">{i}</div>);
    }
    return arr;
  };

  render() {
    return (
      <div className="numbers-container">
        {this.createTable(this.props.limit)}
      </div>
    );
  }
}

export default NumbersTable;
