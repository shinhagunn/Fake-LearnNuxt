<template>
  <nuxt-link class="col-3 product" :to="'/products/' + product.id">
    <div class="product__img">
      <img
        class="container"
        src="http://localhost:3000/api/v2/public/products/11/image"
        alt="anh"
      />
    </div>
    <p class="name">{{ product.name }}</p>
    <p class="price">{{ changeCurrency(product.price) }}</p>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Product } from '../types/index'

@Component({})
export default class ProductItem extends Vue {
  @Prop() readonly product!: Product

  changeCurrency(price: number) {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }
}
</script>

<style>
.col-3 {
  width: 25%;
  padding: 8px 8px;
}

.name {
  padding-bottom: 10px;
  font-size: 30px;
}

.price {
  padding: 8px 0;
  color: #a0122b;
  font-size: 26px;
  font-weight: bold;
}

.status {
  padding: 8px 0;
  font-size: 16px;
}

.view-count {
  padding: 8px 0;
  font-size: 16px;
}
</style>