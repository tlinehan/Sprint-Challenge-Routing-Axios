import React, { Component } from 'react';
import { Link } from 'react-router-dom' ;
import Smurf from './Smurf';
import SmurfForm from './SmurfForm' ;
import Delete from './Delete' ;



class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>

        <Link to="/">Home</Link>

        <SmurfForm />

        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <p>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
                <Delete id={smurf.id}/>
              </p>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
