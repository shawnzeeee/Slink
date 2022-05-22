<template>
    <v-app>
    
    </v-app>
</template>

<script>
//import Axios from 'axios'
import{mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters({
            currentUser: 'user/currentUser'
        })
    },
    methods:{
        ...mapActions({
            getFriendsStore: 'user/getFriends'
        })
    },
    async mounted(){
        try{
            await this.getFriendsStore({username:this.currentUser.username}).then((res)=>{
                console.log(res);
            })
        }catch(error){
            console.log(error);
        }
    }
}
</script>
