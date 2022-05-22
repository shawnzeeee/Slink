<template>
    <v-app>
        <FriendsList/>
    </v-app>
</template>

<script>

import FriendsList from '../components/FriendsList'
import {Auth} from 'aws-amplify';
export default {
    data(){
        return {

        }
    },
    components:{
        FriendsList
    },
    async mounted(){
        const userInfo = await Auth.currentUserInfo()
        console.log(userInfo)
    }
}
</script>
