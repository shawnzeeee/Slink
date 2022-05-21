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
            <h1 class = "display-1"> Sign up </h1>
        </v-card-title>
        <v-card-text>
          <v-form>
              <v-text-field v-model = "username" label =  "Username" prepend-icon = "mdi-account-circle"/>
              <v-text-field v-model = "email" label =  "Email" prepend-icon = "mdi-account-circle"/>
              <v-text-field v-model = "password" label = "Password" type = "password" prepend-icon = "mdi-lock"/>
           </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click = "signUp">Register</v-btn>
        </v-card-actions>
    </v-card>
</v-app>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    
    data(){
        return{
            username:"",
            password:"",
            email:"",
        }
    },
    methods:{
        ...mapActions({
            signUpAuth: 'auth/signUp'
        }),
        goToHome(){
            this.$router.push({path:'/'})
        },
        async signUp(){
            console.log(this.username)
            try{
                 await this.signUpAuth({
                    username: this.username,
                    password: this.password,
                    attributes:{
                        email:this.email
                    }
                }).then((res)=>{
                    console.log(res)
                    this.$router.push({path:`/email-confirmation/${this.username}`})
                })               
            }catch(error){
                console.log(error)
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