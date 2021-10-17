<template>
  <div>
    <div class="container wide">
      <div class="row">
        <div class="col-6">
          <img
            class="container"
            src="http://learn.huuhait.me/api/v2/public/products/11/image"
            alt="anh"
          />
        </div>
        <div class="col-6 product-info">
          <p class="name">{{ product.name }}</p>
          <p class="price">{{ changeCurrency(product.price) }}</p>
          <p v-if="product.stock_left > 0" class="status">
            Tình trạng: Còn hàng
          </p>
          <p v-else class="status">Tình trạng: Còn hàng</p>
          <p class="view-count">Lượt xem: {{ product.view_count }}</p>
          <button>Mua đê bạn</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { Product } from '@/types'
// import { Product } from '../../types/index'

@Component({})
export default class ProductItem extends Vue {
  product!: Product

  head() {
    return {
      title: `Sản phẩm ${this.product.id}`,
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'My custom description'
            }
          ]
    }
  }

  async asyncData({ params, $axios }: Context) {
    const product = await $axios.$get(
      `http://localhost:3000/api/v2/public/products/${params.id}`
    )
    return { product }
  }

  changeCurrency(price: number): string {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  
  &.wide {
    width: 1080px;
    margin: 0 auto;
  }
}

.row {
  margin: 0 -8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
  .col-6 {
    width: 50%;
    padding: 8px 8px;
  }
}

.product-info{
  font-size: 16px;
  .name {
    padding-bottom: 10px;
    font-size: 30px;
  }

  .price {
    color: #a0122b;
    font-size: 26px;
    font-weight: bold;
  }

  .status {
    padding: 8px 0;
  }

  .view-count {
    padding: 8px 0;
  }
}

button {
  cursor: pointer;
  margin: 8px 0;
  padding: 8px;
  min-width: 250px;
  font-size: 16px;
  color: #fff;
  background-color: #007aff;
  border: none;
}
</style>
