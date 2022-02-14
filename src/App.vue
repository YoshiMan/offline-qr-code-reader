<template>
  <v-app>
    <v-main>
      <HelloWorld />
      <ReloadPrompt></ReloadPrompt>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ReloadPrompt from "./components/ReloadPrompt.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    ReloadPrompt
},

  data: () => ({
    //
  }),
};
</script>
