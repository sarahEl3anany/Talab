<template>
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>