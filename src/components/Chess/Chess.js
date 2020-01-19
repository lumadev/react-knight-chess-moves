import React from 'react';
import Header from '../Header/Header'
import Alert from '../../shared/Alert/Alert'
import ReactHtmlParser from 'react-html-parser';
import { BallBeat } from 'react-pure-loaders';
import Axios from 'axios';
import './Chess.scss'

import * as errorMessages from '../../error.consts';

class Chess extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedCell: '',
      loading: false,
      allowedMoves: [],
      errorGeneric: false
    };
    this.cells = [];
  }

  handleSelection(x, y) {
    const cellName = x + String(y);
    if (this.isCellSelected(x, y)) {
      this.clearSelections(x, y);
      return;
    }

    this.setState({ selectedCell: cellName });
    
    Axios.post(`http://localhost:3001/possible-moves`, { cellName }).then((res) => {
      this.setState({ allowedMoves: res.data.algebricMoves });
    }).catch(error => {
      this.setState({ errorGeneric: true });
    });

    // const ref = this.cells[cellName];

    // this.cells.forEach((cellRef) => {
      
    // });
  }

  // fillPossibleMoves(possibleMoves) {
  //   possibleMoves.forEach(element => {
  //     // const ref = this.cells[element];
  //   });
  // }

  clearSelections(x, y) {
    this.setState({ 
      selectedCell: null,
      allowedMoves: []
    });
  }

  getCellClassName(x, y, color) {
    const cellName = x + String(y);
    const highlightedClass = `${color} highlighted`;
    const isSelected = this.state.selectedCell === cellName;
    const isPossibleMove = this.state.allowedMoves.includes(cellName);

    return (isSelected || isPossibleMove) ? highlightedClass : color;
  }

  isCellSelected(x, y) {
    const cellName = x + String(y);
    const isSelected = this.state.selectedCell === cellName;

    return isSelected;
  }

  render() {
    const knightSymbol = '&#9816;';
    return (
      <div>
        <Header />
        <div className="content">
          <div className="chessboard-container">
            {this.state.errorGeneric === true ?
              <Alert type="error" message={errorMessages.GENERIC_ERROR} /> : ''
            }
            <div className="chess-title-container">
              <span className="chess-title">Chessboard</span>
              {this.state.loading ?
                <BallBeat color={'#123abc'} loading={true}/> : ''
              }
              
            </div>
            <div className="chessboard">
              {/* line 8 */}
              <div id="A8" 
                className={this.getCellClassName('A', 8, 'white')}
                onClick={() => this.handleSelection('A', 8)}>

                {this.isCellSelected('A', 8) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="B8" 
                className={this.getCellClassName('B', 8, 'black')}
                onClick={() => this.handleSelection('B', 8)}>

                {this.isCellSelected('B', 8) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="C8" 
                className={this.getCellClassName('C', 8, 'white')}
                onClick={() => this.handleSelection('C', 8)}>

                {this.isCellSelected('C', 8) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="D8"
                className={this.getCellClassName('D', 8, 'black')}
                onClick={() => this.handleSelection('D', 8)}>

                {this.isCellSelected('D', 8) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="E8" 
                className={this.getCellClassName('E', 8, 'white')}
                onClick={() => this.handleSelection('E', 8)}>

                {this.isCellSelected('E', 8) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="F8" 
                className={this.getCellClassName('F', 8, 'black')}
                onClick={() => this.handleSelection('F', 8)}>

                {this.isCellSelected('F', 8) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="G8" 
                className={this.getCellClassName('G', 8, 'white')}
                onClick={() => this.handleSelection('G', 8)}>

                {this.isCellSelected('G', 8) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="H8" 
                className={this.getCellClassName('H', 8, 'black')}
                onClick={() => this.handleSelection('H', 8)}>

                {this.isCellSelected('H', 8) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              
              {/* line 7 */}
              <div id="A7" 
                className={this.getCellClassName('A', 7, 'black')}
                onClick={() => this.handleSelection('A', 7)}>

                {this.isCellSelected('A', 7) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="B7" 
                className={this.getCellClassName('B', 7, 'white')}
                onClick={() => this.handleSelection('B', 7)}>

                {this.isCellSelected('B', 7) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="C7" 
                className={this.getCellClassName('C', 7, 'black')}
                onClick={() => this.handleSelection('C', 7)}>

                {this.isCellSelected('C', 7) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="D7" 
                className={this.getCellClassName('D', 7, 'white')}
                onClick={() => this.handleSelection('D', 7)}>

                {this.isCellSelected('D', 7) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="E7" 
                className={this.getCellClassName('E', 7, 'black')}
                onClick={() => this.handleSelection('E', 7)}>

                {this.isCellSelected('E', 7) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="F7" 
                className={this.getCellClassName('F', 7, 'white')}
                onClick={() => this.handleSelection('F', 7)}>

                {this.isCellSelected('F', 7) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="G7" 
                className={this.getCellClassName('G', 7, 'black')}
                onClick={() => this.handleSelection('G', 7)}>

                {this.isCellSelected('G', 7) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="H7" 
                className={this.getCellClassName('H', 7, 'white')}
                onClick={() => this.handleSelection('H', 7)}>

                {this.isCellSelected('H', 7) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              
              {/* line 6 */}
              <div id="A6" 
                className={this.getCellClassName('A', 6, 'white')}
                onClick={() => this.handleSelection('A', 6)}>

                {this.isCellSelected('A', 6) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="B6" 
                className={this.getCellClassName('B', 6, 'black')}
                onClick={() => this.handleSelection('B', 6)}>

                {this.isCellSelected('B', 6) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="C6" 
                className={this.getCellClassName('C', 6, 'white')}
                onClick={() => this.handleSelection('C', 6)}>

                {this.isCellSelected('C', 6) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="D6" 
                className={this.getCellClassName('D', 6, 'black')}
                onClick={() => this.handleSelection('D', 6)}>

                {this.isCellSelected('D', 6) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="E6" 
                className={this.getCellClassName('E', 6, 'white')}
                onClick={() => this.handleSelection('E', 6)}>

                {this.isCellSelected('E', 6) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="F6"
                className={this.getCellClassName('F', 6, 'black')}
                onClick={() => this.handleSelection('F', 6)}>

                {this.isCellSelected('F', 6) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="G6"
                className={this.getCellClassName('G', 6, 'white')}
                onClick={() => this.handleSelection('G', 6)}>

                {this.isCellSelected('G', 6) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="H6" 
                className={this.getCellClassName('H', 6, 'black')}
                onClick={() => this.handleSelection('H', 6)}>

                {this.isCellSelected('H', 6) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              
              {/* line 5 */}
              <div id="A5" 
                className={this.getCellClassName('A', 5, 'black')}
                onClick={() => this.handleSelection('A', 5)}>

                {this.isCellSelected('A', 5) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="B5" 
                className={this.getCellClassName('B', 5, 'white')}
                onClick={() => this.handleSelection('B', 5)}>

                {this.isCellSelected('B', 5) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="C5" 
                className={this.getCellClassName('C', 5, 'black')}
                onClick={() => this.handleSelection('C', 5)}>

                {this.isCellSelected('C', 5) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="D5" 
                className={this.getCellClassName('D', 5, 'white')}
                onClick={() => this.handleSelection('D', 5)}>

                {this.isCellSelected('D', 5) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="E5" 
                className={this.getCellClassName('E', 5, 'black')}
                onClick={() => this.handleSelection('E', 5)}>

                {this.isCellSelected('E', 5) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="F5" 
                className={this.getCellClassName('F', 5, 'white')}
                onClick={() => this.handleSelection('F', 5)}>

                {this.isCellSelected('F', 5) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="G5" 
                className={this.getCellClassName('G', 5, 'black')}
                onClick={() => this.handleSelection('G', 5)}>

                {this.isCellSelected('G', 5) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="H5" 
                className={this.getCellClassName('H', 5, 'white')}
                onClick={() => this.handleSelection('H', 5)}>

                {this.isCellSelected('H', 5) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              
              {/* line 4 */}
              <div id="A4" 
                className={this.getCellClassName('A', 4, 'white')}
                onClick={() => this.handleSelection('A', 4)}>

                {this.isCellSelected('A', 4) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="B4" 
                className={this.getCellClassName('B', 4, 'black')}
                onClick={() => this.handleSelection('B', 4)}>

                {this.isCellSelected('B', 4) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="C4" 
                className={this.getCellClassName('C', 4, 'white')}
                onClick={() => this.handleSelection('C', 4)}>

                {this.isCellSelected('C', 4) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="D4" 
                className={this.getCellClassName('D', 4, 'black')}
                onClick={() => this.handleSelection('D', 4)}>

                {this.isCellSelected('D', 4) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="E4" 
                className={this.getCellClassName('E', 4, 'white')}
                onClick={() => this.handleSelection('E', 4)}>

                {this.isCellSelected('E', 4) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="F4" 
                className={this.getCellClassName('F', 4, 'black')}
                onClick={() => this.handleSelection('F', 4)}>

                {this.isCellSelected('F', 4) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="G4" 
                className={this.getCellClassName('G', 4, 'white')}
                onClick={() => this.handleSelection('G', 4)}>

                {this.isCellSelected('G', 4) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="H4" 
                className={this.getCellClassName('H', 4, 'black')}
                onClick={() => this.handleSelection('H', 4)}>

                {this.isCellSelected('H', 4) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              
              {/* line 3 */}
              <div id="A3" 
                className={this.getCellClassName('A', 3, 'black')}
                onClick={() => this.handleSelection('A', 3)}>

                {this.isCellSelected('A', 3) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="B3" 
                className={this.getCellClassName('B', 3, 'white')}
                onClick={() => this.handleSelection('B', 3)}>

                {this.isCellSelected('B', 3) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="C3" 
                className={this.getCellClassName('C', 3, 'black')}
                onClick={() => this.handleSelection('C', 3)}>

                {this.isCellSelected('C', 3) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="D3" 
                className={this.getCellClassName('D', 3, 'white')}
                onClick={() => this.handleSelection('D', 3)}>

                {this.isCellSelected('D', 3) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="E3" 
                className={this.getCellClassName('E', 3, 'black')}
                onClick={() => this.handleSelection('E', 3)}>

                {this.isCellSelected('E', 3) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="F3" 
                className={this.getCellClassName('F', 3, 'white')}
                onClick={() => this.handleSelection('F', 3)}>

                {this.isCellSelected('F', 3) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="G3" 
                className={this.getCellClassName('G', 3, 'black')}
                onClick={() => this.handleSelection('G', 3)}>

                {this.isCellSelected('G', 3) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="H3" 
                className={this.getCellClassName('H', 3, 'white')}
                onClick={() => this.handleSelection('H', 3)}>

                {this.isCellSelected('H', 3) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              
              {/* line 2 */}
              <div id="A2" 
                className={this.getCellClassName('A', 2, 'white')}
                onClick={() => this.handleSelection('A', 2)}>

                {this.isCellSelected('A', 2) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="B2" 
                className={this.getCellClassName('B', 2, 'black')}
                onClick={() => this.handleSelection('B', 2)}>

                {this.isCellSelected('B', 2) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="C2" 
                className={this.getCellClassName('C', 2, 'white')}
                onClick={() => this.handleSelection('C', 2)}>

                {this.isCellSelected('C', 2) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="D2" 
                className={this.getCellClassName('D', 2, 'black')}
                onClick={() => this.handleSelection('D', 2)}>

                {this.isCellSelected('D', 2) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="E2" 
                className={this.getCellClassName('E', 2, 'white')}
                onClick={() => this.handleSelection('E', 2)}>

                {this.isCellSelected('E', 2) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="F2" 
                className={this.getCellClassName('F', 2, 'black')}
                onClick={() => this.handleSelection('F', 2)}>

                {this.isCellSelected('F', 2) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="G2" 
                className={this.getCellClassName('G', 2, 'white')}
                onClick={() => this.handleSelection('G', 2)}>

                {this.isCellSelected('G', 2) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="H2" 
                className={this.getCellClassName('H', 2, 'black')}
                onClick={() => this.handleSelection('H', 2)}>

                {this.isCellSelected('H', 2) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              
              {/* line 1 */}
              <div id="A1" 
                className={this.getCellClassName('A', 1, 'black')}
                onClick={() => this.handleSelection('A', 1)}>

                {this.isCellSelected('A', 1) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="B1" 
                className={this.getCellClassName('B', 1, 'white')}
                onClick={() => this.handleSelection('B', 1)}>

                {this.isCellSelected('B', 1) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="C1" 
                className={this.getCellClassName('C', 1, 'black')}
                onClick={() => this.handleSelection('C', 1)}>

                {this.isCellSelected('C', 1) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="D1" 
                className={this.getCellClassName('D', 1, 'white')}
                onClick={() => this.handleSelection('D', 1)}>

                {this.isCellSelected('D', 1) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="E1" 
                className={this.getCellClassName('E', 1, 'black')}
                onClick={() => this.handleSelection('E', 1)}>

                {this.isCellSelected('E', 1) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="F1" 
                className={this.getCellClassName('F', 1, 'white')}
                onClick={() => this.handleSelection('F', 1)}>

                {this.isCellSelected('F', 1) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="G1" 
                className={this.getCellClassName('G', 1, 'black')}
                onClick={() => this.handleSelection('G', 1)}>

                {this.isCellSelected('G', 1) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
              <div id="H1" 
                className={this.getCellClassName('H', 1, 'white')}
                onClick={() => this.handleSelection('H', 1)}>

                {this.isCellSelected('H', 1) ? ReactHtmlParser (knightSymbol) : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chess;
