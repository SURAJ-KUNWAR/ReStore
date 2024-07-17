import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";

export default function ContactPage() {
  const dispatch = useAppDispatch();
  const { data, title } = useAppSelector((state) => state.counter);
  return (
    <>
      <Typography variant="h4">{title}</Typography>
      <Typography>this is data : {data}</Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))}>dec by 1 </Button>
        <Button onClick={() => dispatch(increment(1))}> inc by1</Button>
        <Button onClick={() => dispatch(increment(5))}> inc by 5</Button>
      </ButtonGroup>
    </>
  );
}
