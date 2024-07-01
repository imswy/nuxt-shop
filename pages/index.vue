<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <div class="card-body">
      <h2 class="card-title">
        <Icon name="line-md:clipboard-twotone-to-clipboard-twotone-check-transition"></Icon>
        店铺公告
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-outline btn-warning">联系我们</button>
      </div>
    </div>
  </div>
  <div class="card bg-base-100 w-full shadow-xl mt-4">
    <div class="card-body">
      <h2 class="card-title">
        <Icon name="line-md:clipboard-twotone-to-clipboard-twotone-check-transition"></Icon>
        商品选择
      </h2>
      <p>请选择分类</p>
      <div class="flex items-center justify-between flex-wrap mt-2">
        <nav>
          <input
            v-for="(item, index) in classifyList"
            :key="index"
            v-model="selectClassify"
            type="radio"
            :value="item.id"
            name="radio1"
            class="btn btn-outline mr-6 mb-4 btn-sm"
            :aria-label="item.name"
            @click="getProductList(item.id)"
          />
        </nav>
      </div>
      <template v-if="selectClassify != 0">
        <p>请选择商品</p>
        <div class="flex items-center justify-between flex-wrap mt-2">
          <nav>
            <input
              v-for="(item, index) in productList"
              :key="index"
              v-model="selectproduct"
              type="radio"
              :value="item.id"
              name="radio2"
              class="btn btn-outline mr-6 mb-4 btn-sm"
              :aria-label="item.name"
              @click="showProduct(item)"
            />
          </nav>
        </div>
      </template>
    </div>
  </div>
  <div v-if="product" class="card bg-base-100 w-full shadow-xl mt-4">
    <div class="card-body">
      <h2 class="card-title">
        <Icon name="line-md:clipboard-twotone-to-clipboard-twotone-check-transition"></Icon>
        商品详情
      </h2>
    </div>
  </div>
</template>
<script setup>
const classifyList = await $fetch('/api/classify/list')
const productList = ref()
const product = ref()
const selectClassify = ref(0)
const selectproduct = ref(0)

const getProductList = async (id) => {
  console.log(id)
  productList.value = await $fetch('/api/product/list')
  selectproduct.value = 0
  product.value = null
}
const showProduct = (item) => {
  product.value = item
  console.log(product.value)
}
</script>
