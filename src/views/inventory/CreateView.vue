<template>
  <div class="container">
    <h1>Create grocery</h1>

    <InventoryForm submit-btn="Create" :inventory="inventory" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import InventoryForm from "./components/InventoryForm.vue";
import { useInventoryStore } from "../../stores/inventory";
import type Inventory from "../../stores/Inventory.d";

const $router = useRouter();

const store = useInventoryStore();
const inventory = ref({
  id: 0,
  productCode: "",
  name: "",
  actualAmount: 0,
  minimalAmount: 0,
  price: 0.0,
} as Inventory);

const save = () => {
  store.create(inventory.value);

  $router.push({ name: "inventory.overview" });
};
</script>

<style scoped></style>
