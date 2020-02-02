<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu
        theme="dark"
        :selectedKeys="[this.activeCategory]"
        mode="inline"
        @click="handleMenuClick"
      >
        <a-menu-item key="personal">
          <a-icon type="user" />
          <span>Personal</span>
        </a-menu-item>
        <a-menu-item key="work">
          <a-icon type="desktop" />
          <span>Work</span>
        </a-menu-item>
        <!-- <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>-->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!-- <a-layout-header class="header">
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['0']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">Setari</a-menu-item>
          <a-menu-item key="2">Datele mele</a-menu-item>
        </a-menu>
      </a-layout-header> -->
      <a-layout-content style="margin: 0 16px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
        </div>-->
        <nuxt></nuxt>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Life Happens ©2020 Crafted with ❤️ by
        <a
          target="_blank"
          href="https://georgebrata.ro"
        >Brata George</a>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      activeCategory: 'personal'
    };
  },
  mounted: function() {
    if (window.location.hash) {
      this.activeCategory = window.location.hash.substring(1);
    }
    console.log(this.activeCategory);
  },
  methods: {
    handleMenuClick: function(item) {
      window.location.hash = item.key;
    }
  },
  watch: {
    $route(to, from) {
      console.log("change route")
      this.activeCategory = to.hash.substring(1);
      //this.$emit("changeActiveCategory", to.hash.substring(1));
    }
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
