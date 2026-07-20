<script setup>
const mainMenu = [
  {
    title: 'HOME',
    link: '/'
  },
  {
    title: 'SHOP',
    link: '/shop'
  },
  {
    title: 'ABOUT',
    link: '/about'
  },
  {
    title: 'ARCHIVE',
    link: '/archive'
  },
]
</script>

<template>
  <header>
    <div class="inner">
      <div class="logo">
        <img src="" alt="logo">
      </div>
      <nav class="main-menu">
        <ul class="main-menu-list">
          <li v-for="item in mainMenu" :key="item.title">
            <RouterLink :to="item.link">{{ item.title }}</RouterLink>
          </li>
        </ul>
      </nav>
      <div class="util-menu">
        <ul>
          <li>
            <v-btn class="search-btn"></v-btn>
          </li>
          <li>
            <v-btn class="like-btn"></v-btn>
          </li>
          <li>
            <v-btn class="cart-btn"></v-btn>
          </li>
          <li>
            <v-btn class="profile-btn"></v-btn>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>