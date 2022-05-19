<template>
  <v-app>
    <v-app-bar color = "rgba(238,144,46,1)" elevation = "0" min-height ="150"  >
      <v-col cols="6">
        <img
          v-bind="props"
          height="125"
          width="125"
          src = "../assets/slink-logo.png"
          class="logo"
          >   
      </v-col>
        <v-tabs class="tabs " dark >
          <v-tab @click="goToHome">Home</v-tab>
          <v-tab @click="goToAboutUs">Learn More</v-tab>
          <v-tab @click="gotToContact">Contact</v-tab>
          <v-tab @click="goToCareers">Careers</v-tab>
        </v-tabs>
    </v-app-bar>
    <router-view/>
    <v-footer color = "rgba(238,144,46,1)" height = "150px">
      <v-col>
        <v-btn class="mx-2" outlined>
            <v-icon>
                mdi-facebook
            </v-icon>
        </v-btn>
        <v-btn class="mx-2"  outlined>
            <v-icon>
                mdi-twitter
            </v-icon>
        </v-btn>
        <v-btn class="mx-2" outlined>
            <v-icon>
                mdi-instagram
            </v-icon>
        </v-btn>
      </v-col> 
        <p>2022---All rights reserved</p>
      <v-spacer></v-spacer>
    </v-footer>

  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  },
  methods:{
    goToHome(){
      this.$router.push({path:'/'})
    },
    goToAboutUs(){
      this.$router.push({path:'/about-us'})
    }
  }
}
</script>

<style scoped>
.app-title{
  margin-top: 100px;

  font-size:100px;
  color: rgba(238,144,46,1);
  
}
.logo{
  display:flex;
  margin-top: 50px;
  margin-left: 155px;

  margin-bottom:auto;
  margin-top:70px;
}
.tabs{
  display:flex;
  margin-top:100px;
  margin-right:700px;
  
}
.paragraph{
  display:flex;
  text-align:left;
  padding-left:180px;
  padding-right:50px;
  font-weight: bold;
  font-family: "Courier New";
  font-size: large;
}
.buttons{
  display:flex;
  justify-content:right;
  margin-right:20px;
  margin-top:100px;
}

</style>
