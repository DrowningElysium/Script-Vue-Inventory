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
    i.name = item.name;
    i.price = item.price;
  };

  const destroy = (item: Inventory): void => {
    const index = inventory.value.findIndex(
      (current) => current.id === item.id
    );
    inventory.value.splice(index, 1);
  };

  return { inventory, nextId, getAll, getById, create, update, destroy };
});
