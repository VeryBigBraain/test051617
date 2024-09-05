import { Container } from "./components/Container";
import { Card, CardTop, CardBottom } from "./components/Card";
import { Button } from "./components/Button";
import { Text } from "./components/Text";

export function PageComponent() {
  return (
      <Container background="#f1f6ed" padding="29">
        <Card background="#ffffff" padding="3">
          <CardTop></CardTop>
          <CardBottom>
            <Button size="small" variant="contained" color="primary" text="Click me">Learn more</Button>
            <Button size="small" variant="contained" color="primary" text="Click me">Click me</Button>
            <Button size="small" variant="contained" color="primary" text="Click me">Click me</Button>
          </CardBottom>
        </Card>
        <Text text="Hi world" fontSize="20"></Text>
        <Text text="Hi world йохохохо" fontSize="20"></Text>
        <Container background="#dee8ff" padding="100"></Container>
        <Card background="#f7dada" padding="45">
          <CardTop>
            <Text text="Title" fontSize="29"></Text>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom>
            <Button size="small" variant="contained" color="primary" text="Click me">Learn more</Button>
          </CardBottom>
        </Card>
      </Container>
  );
}