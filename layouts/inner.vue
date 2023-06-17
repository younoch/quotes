<template>
  <div class="position-relative">
    <Header class="sticky-top"></Header>
    <section
      class="page-header bg--cover"
      style="background-image/images/header/bg.jpg)"
    >
      <div class="container">
        <div class="page-header__content text-center">
          <h2 class="text-capitalize">{{ layoutStore.getLayoutTitle }}</h2>
          <nav style="--bs-breadcrumb-divider: '-'" aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ layoutStore.getLayoutSubtitle }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from "~/stores/layout";
    const layoutStore = useLayoutStore();
    const { assignLayoutData } = layoutStore;
    assignLayoutData({ title: "", subtitle: "" });
</script>

<style lang="scss">
.swiper-pagination-bullet {
  -webkit-transform: skew(-10deg);
  -moz-transform: skew(-10deg);
  -ms-transform: skew(-10deg);
  -o-transform: skew(-10deg);
  transform: skew(-10deg);
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background-color: #28dbd1;
}
</style>
