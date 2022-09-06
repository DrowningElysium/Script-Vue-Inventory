<template>
  <div class="container">
    <div class="d-flex justify-content-end mb-1">
      <RouterLink
        :to="{ name: 'inventory.overview' }"
        class="btn btn-danger ms-auto"
      >
        Back to the overview
      </RouterLink>
    </div>

    <ul>
      <li v-for="item in inventory" :key="item.id">
        {{ item.productCode }} - {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useInventoryStore } from "../../stores/inventory";
import type Inventory from "../../stores/Inventory.d";

const store = useInventoryStore();
const inventory = ref([] as Inventory[]);

onMounted((): void => {
  inventory.value = store.lowInventory;
});
</script>

<style scoped></style>
