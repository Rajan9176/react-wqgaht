import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  allClear,
  clear,
  addText,
  solve,
} from '../store/reducers/calculator.reducer';

function Calculator2() {
  const calci = useSelector((state) => state.calculator.calcTxt);
  const dispatch = useDispatch();
  return (
    <div className="rajan">
      <h1>Calculator</h1>
      <input type="text" value={calci} />
      <br />
      <button className="button" onClick={() => dispatch(addText('7'))}>
        7
      </button>
      <button className="button" onClick={() => dispatch(addText('8'))}>
        8
      </button>
      <button className="button" onClick={() => dispatch(addText('9'))}>
        9
      </button>
      <button className="button" onClick={() => dispatch(clear())}>
        c
      </button>
      <br />
      <button className="button" onClick={() => dispatch(allClear())}>
        AC
      </button>
      <button className="button" onClick={() => dispatch(addText('5'))}>
        5
      </button>
      <button className="button" onClick={() => dispatch(addText('6'))}>
        6
      </button>
      <button className="button" onClick={() => dispatch(addText('*'))}>
        *
      </button>
      <br />
      <button className="button" onClick={() => dispatch(addText('1'))}>
        1
      </button>
      <button className="button" onClick={() => dispatch(addText('2'))}>
        2
      </button>
      <button className="button" onClick={() => dispatch(addText('3'))}>
        3
      </button>
      <button className="button" onClick={() => dispatch(addText('-'))}>
        -
      </button>
      <br />
      <button className="button" onClick={() => dispatch(addText('0'))}>
        0
      </button>
      <button className="button" onClick={() => dispatch(addText('.'))}>
        .
      </button>
      <button className="button" onClick={() => dispatch(solve())}>
        =
      </button>
      <button className="button" onClick={() => dispatch(addText('+'))}>
        +
      </button>
    </div>
  );
}
export default Calculator2;
