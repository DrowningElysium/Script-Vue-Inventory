<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="container">
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="product-code" class="form-label">Productcode</label>
        <input
          type="text"
          id="product-code"
          v-model="inventory.productCode"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          id="name"
          v-model="inventory.name"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label for="actual-amount" class="form-label">Actual amount</label>
        <input
          type="number"
          id="actual-amount"
          v-model="inventory.actualAmount"
          min="0"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label for="minimal-amount" class="form-label">Minimal amount</label>
        <input
          type="number"
          id="minimal-amount"
          v-model="inventory.minimalAmount"
          min="0"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input
          type="number"
          id="price"
          v-model="inventory.price"
          min="0.00"
          step="0.01"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <button type="submit">{{ submitBtn }}</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type Inventory from "../../../stores/Inventory.d";

const $emit = defineEmits(["save"]);
const props = defineProps({
  submitBtn: {
    type: String,
    default: "Save",
  },

  inventory: {
    default: {
      id: 0,
      productCode: "",
      name: "",
      actualAmount: 0,
      minimalAmount: 0,
      price: 0.0,
    } as Inventory,
  },
});

const submit = () => {
  $emit("save", props.inventory);
};
</script>

<style scoped></style>
