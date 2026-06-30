interface InventoryItem {
  readonly id: number;
  name: string;
  price: number;
  quantity: number;
  email?: string;
  description?: string;
}

interface inventoryItem {
  [key: number]: InventoryItem;
}

let inventoryItem: InventoryItem[] = [];
let inventoryMap: inventoryItem = {};

function addItem(item: InventoryItem): void {
  if (inventoryMap[item.id]) {
    const i = inventoryMap[item.id];
    if (i != undefined) {
      i.quantity += 1;
      console.log("item added successfully");
      return;
    }
  }
  inventoryItem.push(item);
  inventoryMap[item.id] = item;
  console.log("item added successfully");
  return;
}

function removeItem(id: number) {
  if (!inventoryMap[id]) {
    console.log("Item does not exist");
    return;
  }
  const newList = inventoryItem.filter((i) => i.id != id);
  inventoryItem = newList;
  delete inventoryMap[id];
}

function updateItem(id: number, updates: Partial<InventoryItem>) {
  if (!inventoryMap[id]) {
    console.log("Item does not exist");
    return;
  }

  // When you added an item, you did something like:
  // inventoryItem.push(item);
  // inventoryMap[item.id] = item;
  // Both the array and the map store a reference to the same object.
  // So if you change it through the map:
  // inventoryMap[1].price = 600;
  // the array automatically sees the change because it's pointing to the same object.

  const item = inventoryMap[id];
  if (!item) {
    console.log("Item not found");
    return;
  }

  if (updates.name !== undefined) {
    item.name = updates.name;
  }

  if (updates.price !== undefined) {
    item.price = updates.price;
  }

  if (updates.quantity !== undefined) {
    item.quantity = updates.quantity;
  }

  if (updates.email !== undefined) {
    item.email = updates.email;
  }

  if (updates.description !== undefined) {
    item.description = updates.description;
  }
  console.log("item updated successfully");
}

function listItems() {
  inventoryItem.forEach((element) => {
    console.log(element);
  });
}

function totalValue() {
  const total = inventoryItem.reduce((sum, i) => sum + i.price * i.quantity, 0);
  console.log(`Total inventory value is ${total}`);
}

function avgPrice() {
  if (inventoryItem.length == 0) {
    console.log("no item exists");
    return;
  }
  const total = inventoryItem.reduce((sum, i) => sum + i.price*i.quantity, 0);
  const avg = total / inventoryItem.length;
  console.log(`Average price of item is ${avg}`);
}

addItem({ id: 12, name: "mouse", price: 100, quantity: 3 });
updateItem(12, {price:200});
addItem({ id: 15, name: "laptop", price: 100, quantity: 2 });
listItems();
avgPrice();
totalValue();
