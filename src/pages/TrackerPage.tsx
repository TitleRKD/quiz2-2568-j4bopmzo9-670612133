import { useState } from "react";
import { Button, Stack, Title, Divider, Container, Text ,Modal} from "@mantine/core";
import { v4 as uuidv4 } from "uuid";

type FoodItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
};

export default function FoodTracker() {
  const [opened, setOpened] = useState(false);
  const clickEd = () =>{
    setOpened(opened == true)
  }
  const [items, setItems] = useState<FoodItem[]>([]);
  const categories = ["Main Course", "Drink", "Dessert"];

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button onClick = {() =>clickEd} >Add Food Item</Button>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>
      {/* Type additional AddFoodModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total : {} Baht</Title>
      <Stack my="sm">
        <Text>Main Course: {} Baht</Text>
        <Text>Drink: {} Baht</Text>
        <Text>Dessert: {} Baht</Text>
      </Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack>{/* Type additional food card list here. */}</Stack>
    </Container>
  );
}
