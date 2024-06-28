import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  function getValidationError() {
    agent.TestErrors.getValidationError()
      .then(() => console.log("i will never be called"))
      .catch((err) => setValidationErrors(err));
  }
  return (
    <>
      <Container>
        <Typography gutterBottom variant="h2">
          Test Errors
        </Typography>
        <ButtonGroup fullWidth>
          <Button
            variant="contained"
            onClick={() =>
              agent.TestErrors.get400Error().catch((err) => console.log(err))
            }
          >
            Test 400 error
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              agent.TestErrors.get401Error().catch((err) => console.log(err))
            }
          >
            Test 401 error
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              agent.TestErrors.get404Error().catch((err) => console.log(err))
            }
          >
            Test 404 error
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              agent.TestErrors.get500Error().catch((err) => console.log(err))
            }
          >
            Test 500 error
          </Button>
          <Button variant="contained" onClick={getValidationError}>
            Validation error
          </Button>
        </ButtonGroup>
        {validationErrors.length > 0 && (
          <Alert severity="error">
            <AlertTitle>Validation Errors</AlertTitle>
            <List>
              {validationErrors.map((error) => (
                <ListItem key={error}>
                  <ListItemText>{error}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Alert>
        )}
      </Container>
    </>
  );
}
