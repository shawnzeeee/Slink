/* eslint-disable */
import {Auth} from 'aws-amplify';
export default ({
    namespaced: true,
    state:{user: null},
    mutations:{
        setUser(state, payload){
            state.user = payload;
        },
        clearUser(state,payload){
            state.user = payload;
        }
    },
    actions:{
        async logout({commit}){
            try{
                await Auth.signOut()
                commit('clearUser',null)
                return Promise.resolve("User signed out")
            }catch(error){
                console.log(error);
                return Promise.reject(error);
            }
        },
        async login({commit}, {username,password}){
            try{
                await Auth.signIn({
                    username,
                    password
                })                
                commit('user/SET_USER_INFO',{username},{root:true});
                return Promise.resolve(`${username} has logged in`)
            }catch(error){
                console.log(error);
                return Promise.reject(error);
            }
        },
        async confirmSignUp({commit},{username, code}){
            try{
                await Auth.confirmSignUp(username, code)
                //commit('user/CLEAR_USER_INFO',{username},{root:true});
                return Promise.resolve(`${username} has confirmed sign up`)
            }catch(error){
                console.log(error);
                return Promise.reject(error);
            }
        },
        async signUp({commit},{username, password, attributes}){
            try{
                await Auth.signUp({
                    username, 
                    password, 
                    attributes
                });
                commit('user/SET_USER_INFO',{username},{root:true});
                return Promise.resolve(`${username} has signed up`)
            }catch(error){
                console.log(error);
                return Promise.reject(error);
            }
        },
        async authAction({commit}){
            const userInfo = await Auth.currentUserInfo();
            commit('setUser',userInfo);
        }
    },
    getters:{
       user(state){
           return state.user;
       }
    }
})