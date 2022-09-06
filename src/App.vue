<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-1">
    <div class="container">
      <RouterLink :to="{ name: 'home' }" class="navbar-brand">
        Inventory
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#top-navbar"
        aria-controls="top-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="top-navbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink :to="{ name: 'home' }" class="nav-link">
              Home
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink :to="{ name: 'inventory.overview' }" class="nav-link">
              Inventory
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>
