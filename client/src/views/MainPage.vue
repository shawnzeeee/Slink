<template>

    <v-row>
      <v-col >
        <div>
          <h1 class="app-title">This is Slink</h1>
        </div>
        <div>
          <p class ="paragraph">Struggling for an exam? Racking you're brain over a question? Or even just looking for a studying partner?
            Sign up today and share you're burdens with Slink.
          </p>
          
        </div>
          
        <div class = "buttons">
          <v-btn @click="goToLogin" class="mx-2" outlined width = "200" rounded large>Log In</v-btn>
          <v-btn @click="goToSignUp" class="mx-2" color = "#9B4A97" width = "200" rounded large>Sign Up</v-btn>
        </div>
      </v-col>
      <v-col>
        <v-img class = "mr-16" src="../assets/huumans-collaboration.png">
        </v-img>
      </v-col>
    </v-row>   

</template>
<script>

export default {
    data(){
        return{

        }
    },
    methods:{
        goToLogin(){
            this.$router.push({path:'login'})
        },
        goToSignUp(){
            this.$router.push({path:'sign-up'})
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