<template>
  <div class="container">
    <div class="d-flex justify-content-end mb-1">
      <RouterLink
        :to="{ name: 'inventory.create' }"
        class="btn btn-success ms-auto"
      >
        New item
      </RouterLink>
    </div>

    <InventoryTable
      :inventory="inventory"
      @update-actual-amount="updateActualAmount"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import InventoryTable from "./components/InventoryTable.vue";
import { useInventoryStore } from "../../stores/inventory";
import type Inventory from "../../stores/Inventory.d";

const store = useInventoryStore();
const inventory = ref([] as Inventory[]);

const updateActualAmount = (item: Inventory) => {
  store.update(item);
};

onMounted((): void => {
  inventory.value = JSON.parse(JSON.stringify(store.getAll()));
});
</script>

<style scoped></style>
