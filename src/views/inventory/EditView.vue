<template>
  <div class="container">
    <h1>Edit {{ inventory.name }}</h1>

    <InventoryForm submit-btn="Save" :inventory="inventory" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import InventoryForm from "./components/InventoryForm.vue";
import { useInventoryStore } from "../../stores/inventory";
import type Inventory from "../../stores/Inventory.d";

const $router = useRouter();
const $route = useRoute();
const store = useInventoryStore();
const inventory = ref({
  id: 0,
  productCode: "",
  name: "",
  actualAmount: 0,
  minimalAmount: 0,
  price: 0.0,
} as Inventory);

const save = (): void => {
  store.update(inventory.value);

  $router.push({ name: "inventory.overview" });
};

watchEffect(() => {
  if (!$route.params.id) {
    return;
  }

  const id = parseInt($route.params.id.toString());
  const item = store.getById(id);
  if (item) {
    Object.assign(inventory.value, item);
  }
});
</script>

<style scoped></style>
