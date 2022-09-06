import { defineStore } from "pinia";
import { ref } from "vue";
import data from "./inventory.json";
import type Inventory from "./Inventory.d";

export const useInventoryStore = defineStore("inventory", () => {
  const inventory = ref(data as Inventory[]);
  const nextId = ref(data[data.length - 1].id + 1);

  const getAll = (): Inventory[] => {
    return inventory.value;
  };

  const getById = (id: Number): Inventory | undefined => {
    return inventory.value.find((item) => item.id === id);
  };

  const create = (item: Inventory): void => {
    item.id = nextId.value++;
    inventory.value.push(item);
  };

  const update = (item: Inventory): void => {
    const i = getById(item.id);

    // If item can't be found cancel silently.
    if (!i) {
      return; // Normally I'd throw an exception, but that is currently too much work.
    }

    i.productCode = item.productCode;
    i.name = item.name;
    i.actualAmount = item.actualAmount;
    i.minimalAmount = item.minimalAmount;
    i.price = item.price;
  };

  return { inventory, nextId, getAll, getById, create, update };
});
