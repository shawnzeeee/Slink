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
              <v-text-field v-model = "username" label =  "Username" prepend-icon = "mdi-account-circle"/>
              <v-text-field v-model = "password" label = "Password" type = "password" prepend-icon = "mdi-lock"/>
           </v-form>
      </v-card-text>
      <v-card-actions>
          <v-btn @click = "login">Login</v-btn>
          <v-btn @click = "goToSignUp">Create Account</v-btn>
    </v-card-actions>
    </v-card>
</v-app>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
export default {
    data(){
        return{
            username:"",
            password:"",
        }
    },
    computed:{

    },
    methods:{
        ...mapActions({
            loginAuth: 'auth/login'
        }),
        ...mapMutations({
            SET_USER_INFO:'user/SET_USER_INFO'
        }),
        goToHome(){
            this.$router.push({path:'/'})
        },
        goToSignUp(){
            this.$router.push({path:'/sign-up'})
        },
        async login(){
            try{
                await this.loginAuth({
                    username: this.username,
                    password: this.password
                }).then((res)=>{
                    console.log(res);
                    const input = {username: this.username}
                    this.SET_USER_INFO(input);
                    this.$router.push({path:`/user/${this.username}`})
                })
            }catch(error){
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
.logo{
    margin-top: 75px; 
    margin-bottom:10px;
}
</style>