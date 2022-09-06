<template>
  <table class="table table-bordered">
    <caption>
      List of inventory items
    </caption>
    <thead>
      <tr>
        <th>Product code</th>
        <th>Name</th>
        <th>Actual amount</th>
        <th>Minimal amount</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.inventory" :key="item.id">
        <td>
          <RouterLink :to="{ name: 'inventory.edit', params: { id: item.id } }">
            {{ item.productCode }}
          </RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'inventory.edit', params: { id: item.id } }">
            {{ item.name }}
          </RouterLink>
        </td>
        <td>
          <div class="input-group">
            <input
              type="number"
              v-model="item.actualAmount"
              min="0"
              class="form-control"
            />
            <button
              class="btn btn-outline-secondary"
              @click="updateActualAmount(item)"
            >
              &#128427;
            </button>
          </div>
        </td>
        <td>{{ item.minimalAmount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type Inventory from "../../../stores/Inventory.d";

const props = defineProps({
  inventory: {
    type: Array<Inventory>,
    required: true,
  },
});
const $emit = defineEmits(["updateActualAmount"]);

const updateActualAmount = (item: Inventory) => {
  $emit("updateActualAmount", item);
};
</script>

<style scoped></style>
