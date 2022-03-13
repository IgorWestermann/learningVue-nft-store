<template>
  <div class="app-header">
    <v-app-bar flat>
      <v-container class="header">
        <v-row v-for="j in justify" :key="j" :justify="j">
          <v-col class="mt-auto">
            <router-link to="/">
              <v-toolbar-title class="logo"
                ><span>NFT</span> Store</v-toolbar-title
              >
            </router-link>
          </v-col>
          <v-col class="mt-auto mb-3">
            <router-link class="menu-item" to="/buy-nft"
              >Comprar NFTs</router-link
            >
          </v-col>
          <v-col class="mt-auto mb-3">
            <router-link class="menu-item" to="/about">Sobre</router-link>
          </v-col>
          <v-col class="mt-auto mb-3">
            <router-link class="menu-item" to="/faq">FAQ</router-link>
          </v-col>
          <v-col class="mt-auto mb-3">
            <router-link
              class="menu-item"
              to="/"
            >
              <div class="bola mt-3 d-flex align-center justify-center">
                <img :src="require('../assets/metaMask.svg')" />
                <span class="ml-6">Conectar</span>
              </div>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data: () => ({
    justify: ["space-around"],
  }),
};
</script>

<style scoped>
.app-header a {
  text-decoration: none;
}
.header {
  background-color: transparent !important;
}
.logo span {
  color: #ff5b50;
}
.logo {
  color: #ffffff;
  font-family: "Montserrat";
  font-size: 40px;
  font-weight: bold;
}
.menu-item {
  color: #ffffff;
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: regular;
}
.bola {
  background-color: #ffffff;
  width: 200px;
  height: 40px;
  border-radius: 3px;
}
.bola span {
  color: #000000;
}
.bola:hover {
background-color: #212121
;
}
.bola:hover span {
  color: #ffffff;
}
</style>