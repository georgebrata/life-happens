<template>
  <div class="container">
    <div>
      <img src="https://media.giphy.com/media/fng8OzU2DvO2NCGeLY/giphy.gif" height="212" width="212">
      <h1 class="title">
        Life Happens
      </h1>
      <h2 class="subtitle">
        Manage visual representations of key aspects of your life 👀
      </h2>
      <h3 class="subtitle">
        Edit cards on the dashboard for best visual representation 🔺
      </h3>
      <h3 class="subtitle">
        Complex recurrent flows 🔁
      </h3>
      <div class="links">
        <a
          href="."
          class="button--green"
        >
          Go to dashboard
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
