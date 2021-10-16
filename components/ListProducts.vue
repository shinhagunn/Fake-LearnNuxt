<template>
  <div>
    <h2>Tất cả sản phẩm</h2>
    <div class="container wide">
      <div class="row">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Product } from '../types/index'

@Component({})
export default class ListProducts extends Vue {
  products: Product[] = []

  async fetch() {
    try {
      const { data } = await this.$axios(
        'http://localhost:3000/api/v2/public/products'
      )
      this.products = data
    } catch (error) {
      return error
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
}

.wide {
  width: 1080px;
  margin: 0 auto;
}

.row {
  margin: 0 -8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
