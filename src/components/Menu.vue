<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="menu left">
        <router-link class="item" to="/"> Nominas </router-link>
      </div>

      <router-link class="menu center" to="/"
        ><img class="ui small image" src="../assets/nomina.png" alt="menu" />
      </router-link>

      <div class="menu right">
        <router-link class="item" to="/"> Hola, Cesar </router-link>

        <span class="ui item logout">
          <i class="sign-out icon" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #16202b;
  .item {
    color: #fff;
    &:hover {
      color: #1fa1f1;
    }
  }
  .menu.left {
    width: 50%;
    justify-content: flex-start;
  }
  .menu.right {
    width: 50%;
    justify-content: flex-end;

    .logout:hover {
      cursor: pointer;
      i {
        color: #f00;
      }
    }
  }

  .menu.center {
    background-color: #16202b;
    position: relative;
    top: 15px;
    padding: 20px;
    margin: -20px;
    border-radius: 50%;

    &:hover {
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
    }
    .ui.image {
      width: 40px;
    }
  }
}
</style>
