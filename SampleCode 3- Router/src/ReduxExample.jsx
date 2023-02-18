import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./reduxslice";

export default function ReduxExample(props) {
  const records = useSelector(function (store) {
    return store.record.value;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <p>{records}</p>
      <button onClick={() => dispatch(increment())}>Add 1</button>
      <button onClick={() => dispatch(decrement())}>Minus 1</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        increment By 10
      </button>
    </div>
  );
}
