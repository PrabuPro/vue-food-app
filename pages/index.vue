<template>
  <main class="container">
   <AppHeader />
   <AppRestaurentInfo :dataSource="fooddata" />
  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppRestaurentInfo from '@/components/AppRestaurentInfo.vue';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'fooddata',
    ])
  },
  components: {
    AppHeader,
    AppRestaurentInfo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
