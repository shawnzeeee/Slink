<template>
    <v-app>
    <v-app-bar color = "rgba(238,144,46,1)" elevation = "0" max-height ="150"  >
        <v-spacer></v-spacer>
        <img
          v-bind="props"
          height="125"
          width="125"
          src = "../assets/slink-logo.png"
          class="logo"
          >   

        <v-spacer></v-spacer>
      <v-btn color=black dark large @click="goToHome">Home</v-btn>
    </v-app-bar>
    <v-card width = "400" class= "mx-auto">
      <v-card-title>
        <h1 class = "display-1"> Sign In </h1>
      </v-card-title>
      <v-card-text>
          <v-form>
              <v-text-field v-model = "code" label =  "Confirmation Code"/>
           </v-form>
      </v-card-text>
      <v-card-actions>
          <v-btn @click = "confirm">Submit</v-btn>
    </v-card-actions>
    </v-card>    
    </v-app>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:["username"],
    data(){
        return{
            code:""
        }
    },
    methods:{
      ...mapActions({
          confirmationAuth:'auth/confirmSignUp'
      }),
      async confirm(){
          try{
              const input = {username:this.username, code:this.code}
              this.confirmationAuth(input).then((res)=>{
                  console.log(res);
                  this.$router.push({path:'/'});
              })
          }catch(error){
              console.log(error)
          }
      }  
    }
}
</script>
