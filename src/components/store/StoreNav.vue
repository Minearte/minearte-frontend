<template>
    <nav
      class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4"
    >
      <span class="container-fluid px-0">
  
        <button
          class="navbar-toggler shadow-none ms-md-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
  
        <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation"
        >
          <ul class="navbar-nav navbar-nav-hover mx-auto">
            <li class="nav-item dropdown dropdown-hover mx-2">
              <RouterLink
                role="button"
                style="text-decoration: none; color: inherit"
                class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                to="/"
              >
                Rango 1
              </RouterLink>
            </li>
  
  
          </ul>
  
          <ul class="navbar-nav d-lg-block">
            <li class="nav-item">
            <div class="con-switch">
              <ThemeButton />  
            </div>
            </li>
          </ul>
        </div>
      </span>
    </nav>
  </template>
  <script lang="ts">
  import { RouterLink } from "vue-router";
  export default {
    name: "NavBar",
    components: {
      RouterLink,
  },
    data: () => ({
      dark: true,
    }),
    methods: {
      toggleDark() {
        this.dark = !this.dark;
      },
    },
  };
  </script>
  <style scoped>
  .blur.blur-rounded {
    border-radius: 40px;
  }
  ul {
    color: var(--text-main) !important;
  }
  .navbar {
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
  
  .navbar-toggler {
    float: left;
    border-radius: 0%;
    border-color: transparent;
    box-shadow: none;
    border: none;
    filter: invert(var(--invert));
  }
  nav {
    color: white;
  }
  a:link {
    text-decoration: none;
  }
  .nav-item {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
  .z-index-3 {
    z-index: 3 !important;
  }
  .py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .mx-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .end-0 {
    right: 0 !important;
  }
  .start-0 {
    left: 0 !important;
  }
  .top-0 {
    top: 0 !important;
  }
  .position-absolute {
    position: absolute !important;
  }
  .shadow {
    box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
      0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
  }
  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  html * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  user agent stylesheet nav {
    display: block;
  }
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    --bs-navbar-color: #ffff;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) * -0.5);
    margin-left: calc(var(--bs-gutter-x) * -0.5);
  }
  .nav-link {
    color: white;
  }
  .nav-link:hover {
    color: white;
  }
  .nav-link:focus {
    color: white;
  }
  .nav-link:active {
    color: white;
  }
  .nav-link:visited {
    color: white;
  }
  .dropdown-menu {
    background-color: #212126;
  }
  </style>
  