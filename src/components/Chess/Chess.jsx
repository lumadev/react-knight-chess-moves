import { useState, useCallback } from "react";
import Header from "../Header/Header";
import Alert from "../../shared/Alert/Alert";
import CheckboxSquare from "../../shared/CheckboxSquare/CheckboxSquare";
import ButtonBack from "../Wizard/ButtonBack/ButtonBack";
import ReactHtmlParser from "react-html-parser";
import { BeatLoader } from 'react-spinners';
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Chess.scss";
import { API_URL } from "../../app.consts";

import * as errorMessages from "../../error.consts";

function Chess() {
  const [selectedCell, setSelectedCell] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSecondTurnMoves, setShowSecondTurnMoves] = useState(true);
  const [hasInvalidMove, setHasInvalidMove] = useState(false);
  const [lastMove, setLastMove] = useState(null);
  const [allowedMoves, setAllowedMoves] = useState([]);
  const [secondMoves, setSecondMoves] = useState([]);
  const [secondMovesApi, setSecondMovesApi] = useState([]);
  const [errorGeneric, setErrorGeneric] = useState(false);
  const [showError, setShowError] = useState(false);

  const knightSymbol = "&#9816;";

  const isFirstMove = () => selectedCell === null;

  const clearSelections = useCallback(() => {
    setSelectedCell(null);
    setAllowedMoves([]);
    setSecondMoves([]);
    setHasInvalidMove(false);
    setShowError(false);
  }, []);

  const isCellSelected = (x, y) => selectedCell === x + String(y);

  const getCellClassName = (x, y, color) => {
    const cellName = x + String(y);
    const highlightedYellow = `${color} highlighted`;
    const highlightedBlue = `${color} highlighted-blue`;
    const isSelected = selectedCell === cellName;
    const isPossibleMove = allowedMoves.includes(cellName);
    const isSecondMove = secondMoves.includes(cellName);
    const hasSelection = selectedCell !== null;

    if (isSelected || isPossibleMove) return highlightedYellow;
    if (isSecondMove && showSecondTurnMoves && hasSelection)
      return highlightedBlue;
    return color;
  };

  const selectSecondTurnMoves = useCallback(
    (moves) => {
      if (hasInvalidMove) return;

      Axios.post(`${API_URL}/move/second-turn-moves`, { moves })
        .then((res) => {
          const moves = res.data.moves;
          setSecondMoves(moves);
          setSecondMovesApi(moves);
        })
        .catch(() => setErrorGeneric(true));
    },
    [hasInvalidMove]
  );

  const handleSelection = useCallback(
    (x, y) => {
      const coordinate = x + String(y);

      if (isCellSelected(x, y)) {
        clearSelections();
        return;
      }

      setLoading(true);
      Axios.post(`${API_URL}/move/possible-moves`, { coordinate })
        .then((res) => {
          const moves = res.data.moves;

          if (moves.includes(lastMove) || isFirstMove()) {
            setSelectedCell(coordinate);
            setAllowedMoves(moves);
            setLastMove(coordinate);
            setHasInvalidMove(false);
            setShowError(false);
          } else {
            setHasInvalidMove(true);
            setShowError(true);
          }
          return moves;
        })
        .then((moves) => selectSecondTurnMoves(moves))
        .catch(() => setErrorGeneric(true))
        .finally(() => setLoading(false));
    },
    [lastMove, clearSelections, selectSecondTurnMoves]
  );

  const closeAlert = () => setShowError(false);

  const toggleShowSecondMove = () => {
    if (showSecondTurnMoves) {
      setSecondMoves([]);
    } else {
      setSecondMoves(secondMovesApi);
    }
    setShowSecondTurnMoves(!showSecondTurnMoves);
  };

  // Gerar o tabuleiro dinamicamente
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];
  const cols = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <div>
      <Header />
      <div className="content">
        <div className="chessboard-container">
          {errorGeneric && showError && (
            <Alert
              type="error"
              message={errorMessages.GENERIC_ERROR}
              closeAlert={closeAlert}
            />
          )}
          {hasInvalidMove && showError && (
            <Alert
              type="error"
              message="Please choose a valid move."
              closeAlert={closeAlert}
            />
          )}

          <div className="chess-title-container">
            <Link to="/home" className="item-link selected">
              <ButtonBack ice={true} />
            </Link>
            <span></span>
            <span className="chess-title">Chessboard</span>
            {loading && <BeatLoader color={"#123abc"} loading={true} />}
            <div className="checkbox-container">
              <span className="span-second-move">Show Second Moves</span>
              <CheckboxSquare
                onChange={toggleShowSecondMove}
                checked={showSecondTurnMoves}
              />
            </div>
          </div>

          <a href="#" className="clear-board" onClick={clearSelections}>
            Clear board
          </a>

          <div className="chessboard">
            {rows.map((row) =>
              cols.map((col, idx) => {
                const color = (row + idx) % 2 === 0 ? "white" : "black";
                return (
                  <div
                    key={col + row}
                    id={`${col}${row}`}
                    className={getCellClassName(col, row, color)}
                    onClick={() => handleSelection(col, row)}
                  >
                    {isCellSelected(col, row)
                      ? ReactHtmlParser(knightSymbol)
                      : ""}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chess;
