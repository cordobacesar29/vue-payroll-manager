<template>
  <template v-if="user">
    <router-view/>
  </template>
  <div v-if="!user && user !== undefined">
    <p>login</p>
  </div>
</template>

<script>
  import {onMounted, computed} from "vue"
  import {useStore} from "vuex"
  import {auth} from "./utils/firebase"

  export default {
    name: "App",
    setup() {
      const store = useStore()
      const user = computed(()=>store.state.user)

      onMounted(()=> {
        auth.onAuthStateChanged((user)=>{
          store.commit("setUser", user)
        })
      })

      return {
        user
      }
    }
  }
</script>

<style lang="scss">
</style>
