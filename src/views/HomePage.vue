<template>
  <div>
    <v-container class="mb-6 mt-15">
      <v-row>
        <v-col cols="3">
          <div class="pa-5 mt-3 d-flex justify-center align-center">
            <p class="normal-text">
              Mercado digital para colecionáveis em criptos e tokens não
              fungível (NFT). Compre, venda e descubra ativos digitais
              exclusivos para você.
            </p>
          </div>
          <v-row>
            <v-col cols="6">
              <v-img
                height="100"
                width="180"
                :src="require('../assets/avatar.png')"
              />
            </v-col>
            <v-col cols="6">
              <p>+10 artistas selecionados</p>
            </v-col>
          </v-row>
          <div
            class="nested-avatar pa-5 mt-3 d-flex justify-center align-center"
          ></div>
        </v-col>
        <v-col cols="6">
          <div class="pa-5 d-flex justify-center align-center">
            <p class="main-text">
              Descubra a verdadeira arte digital e colecione diversas
              <span>NFTs</span>
            </p>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="pa-5 centralizarImagem">
            <v-img
              :src="require('../assets/nft-logo.png')"
              max-height="200"
              max-width="200"
            >
            </v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.normal-text {
  color: #ffffff;
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: regular;
}
.main-text {
  color: #ffffff;
  font-family: "Montserrat";
  font-size: 50px;
  font-weight: bold;
}
.main-text span {
  color: #ff5b50;
}
.centralizarImagem {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.nested-avatar {
  width: 120px;
}
</style>
