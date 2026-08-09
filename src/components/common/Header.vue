<script setup>
  import { ref } from 'vue'

  const mainMenu = [
    {
      title: 'HOME',
      link: '#home'
    },
    {
      title: 'ABOUT',
      link: '#about'
    },
    {
      title: 'PROJECT',
      link: '#project'
    },
    {
      title: 'CONTACT',
      link: '#contact'
    },
  ]
</script>

<template>
  <div class="announcement-bar">
    <p>박형석 | PORTFOLIO</p>
  </div>
  <header>
    <div class="inner">
      <div class="logo">
        <span class="sr-only">logo</span>
        <a href="#home"></a>
      </div>
      <nav class="main-menu">
        <ul class="menu-list">
          <li v-for="item in mainMenu" :key="item.title">
            <a :href="item.link">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
      <div class="util-menu">
        <ul class="menu-list">
          <li>
            <v-btn icon variant="text" size="36">
              <v-icon size="24">mdi-magnify</v-icon>
            </v-btn>
          </li>
          <li>
            <v-btn icon variant="text" size="36">
              <v-icon size="24">mdi-heart-outline</v-icon>
            </v-btn>
          </li>
          <li>
            <v-btn icon variant="text" size="36">
              <v-icon size="24">mdi-cart-outline</v-icon>
            </v-btn>
          </li>
          <li>
            <v-btn icon variant="text" size="36">
              <v-icon size="24">mdi-account-outline</v-icon>
            </v-btn>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>