/* eslint-disable */
import Axios from 'axios'
export default({
    namespaced:true,
    state:{
        username:null,
        userID: null,
        friends:[]
    },
    mutations:{
        SET_USER_INFO(state,payload){
            state.username = payload.username;
        },
        CLEAR_USER_INFO(state){
            state.username = null,
            state.userID = null;
        },
        ADD_FRIENDS(state,payload){
            state.friends.push(payload.username);
        },
    },
    actions:{
        async getFriends({},payload){
            try{
                const result = await Axios.get('http://localhost:5000/api/friends',{
                    params:{
                        username: payload.username
                    }
                })
                console.log(result)
                return Promise.resolve(result);
            }catch(error){
                console.log(error);
            }
        },
        async addFriends({},payload){
            try{
                const result = await Axios.post('http://localhost:5000/api/friends/add',{
                    body:{
                        username:payload.username
                    }
                })
                return Promise.resolve(result);
            }catch(error){

            }
        }
    },
    getters:{
        currentUser(state){
            return state;
        }
    }
})