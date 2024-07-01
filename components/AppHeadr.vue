<template>
  <header>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <NuxtLink to="/" class="btn btn-ghost text-xl">摸鱼高手</NuxtLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li v-for="(item, index) in menuList" :key="index">
            <template v-if="item.children">
              <details>
                <summary>{{ item.text }}</summary>
                <ul class="!fixed p-2">
                  <li v-for="(child, index1) in item.children" :key="index1">
                    <NuxtLink :to="child.path">
                      <Icon :name="child.icon" />
                      <span>{{ child.text }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </details>
            </template>
            <NuxtLink v-else :to="item.path"> <Icon :name="item.icon" />{{ item.text }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="mr-4 cursor-pointer" @click="toggleDark()">
          <Icon
            v-if="colorMode.value === 'light'"
            name="line-md:sun-rising-filled-loop"
            size="22"
          />
          <Icon v-else name="line-md:moon-filled-loop" size="22" />
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
const colorMode = useColorMode()

const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const menuList = ref([
  {
    icon: 'noto:house-with-garden',
    text: '首页',
    path: '/'
  },
  {
    icon: 'flat-color-icons:calendar',
    text: '商店',
    path: '/shop'
  }
  // {
  //   icon: 'material-symbols:shopping-cart-rounded',
  //   text: '生活',
  //   path: '/cart',
  //   children: [
  //     {
  //       icon: 'material-symbols:shopping-cart-rounded',
  //       text: '购物车',
  //       path: '/cart'
  //     },
  //     {
  //       icon: 'material-symbols:shopping-cart-rounded',
  //       text: '购物车',
  //       path: '/cart'
  //     }
  //   ]
  // }
])
</script>
