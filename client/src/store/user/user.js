

export default({
    namespaced:true,
    state:{
        username:null,
        userID: null,
        followers:[],
        following:[],
    },
    mutations:{
        SET_USER_INFO(state,payload){
            state.username = payload.username;
        },
        CLEAR_USER_INFO(state){
            state.username = null,
            state.userID = null;
        },
        ADD_FOLLOWERS(state,payload){
            state.followers.push(payload.username);
        },
        ADD_FOLLOWING(state,payload){
            state.follwing.push(payload.username);
        }
    },
    actions:{

    }
})