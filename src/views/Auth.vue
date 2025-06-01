<template>
  <div class="auth">
    <Login v-if="showLogin" :changeForm="changeForm" />
    <Register v-if="!showLogin" :changeForm="changeForm" />
  </div>
</template>

<script>
import Login from "@/components/Auth/Login.vue";
import Register from "@/components/Auth/Register.vue";
import { ref } from "vue";

export default {
  name: "Auth",
  components: {
    Login,
    Register,
  },
  setup() {
    let showLogin = ref(true);

    const changeForm = () => {
      showLogin.value = !showLogin.value;
    };

    return {
      showLogin,
      changeForm,
    };
  },
};
</script>

<style lang="scss" scoped>
  .auth {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(4, 78, 157);
    background: linear-gradient(
      0deg,
      rgb(149, 199, 252) 0%,
      rgb(29, 4, 255) 100%
    );
  }
</style>
