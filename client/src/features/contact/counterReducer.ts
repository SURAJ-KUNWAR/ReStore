export interface CounterState {
  data: number;
}

const intialState: CounterState = {
  data: 42,
};
export default function counterReducer(state = intialState, action: any) {
  return state;
}
