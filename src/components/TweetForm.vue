<template>
<!--:class, le vas a poner a este elemento la class opne si showForm es igual a true-->

    <div class="tweet-form container" :class="{ open: showForm }">
        <form @submit.prevent="sendTweet"> 
            <input 
            type="text" 
            placeholder="Tu nombre"
            v-model="userName"
            >
            <textarea 
            rows="3" 
            placeholder="Escribe tu tweet"
            v-model="tweet"
            ></textarea>
            <button 
            type="submit" 
            class="buttton-enviar"
            >Enviar Tweet
            </button>
        </form>
    </div>
</template>

<script>

import { ref } from 'vue';
import { saveTweetApi } from "../api/tweet"
export default {
    props:{
        showForm: Boolean,
        reloadTweets: Function,
        openCloseForm: Function,
    },
    setup(props){

        const userName = ref("");
        const tweet = ref("");

//Cuando el usuario click en enviar tweet. Se evalua:
        const sendTweet= () => {
            if(!tweet.value || !userName.value) return //Si tweet o username estan vacios, no se hace nada y regresa

            saveTweetApi(tweet.value, userName.value); //Si los dos elementos estan llenos entonces, el tweet se guarda, por eso se manda a llamar a save tweetapi
            tweet.value = "";                          //Los datos en value se vacian, para limpiar los imputs
            userName.value = "";
            props.reloadTweets();                     //Se llama a reaload, para cargar los tweets guardados en storafe 
            props.openCloseForm();                      //Se cierra dependiendo del estado (true o false), el form
        };

    return {
        sendTweet,
        userName,
        tweet,
    }
    }
}
</script>

<style lang="scss" >
$color-claro:#ddd;
$color-obscuro:#0d0d0d;
$color-btn-normal:rgb(222, 140, 215);
$color-btn-hover:rgb(233, 132, 225);
$color-btn-active: rgb(223, 153, 217);
$color-btn-borde: rgb(202, 109, 124);

input, textarea{
    width: 100%;
    outline: none;
    padding: 10px;
    background-color: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.26 );
    backdrop-filter: blur( 11px );
    -webkit-backdrop-filter: blur( 11px );
    border-radius: 10px;     
    color: $color-claro;
}
.buttton-enviar{
    background-color:$color-btn-normal ;
    padding: 10px;
    border-radius: 20px;
    color: $color-obscuro;
    outline: none;
    border: 0;
}
.buttton-enviar:hover{
    background-color:$color-btn-hover ;
    padding: 13px;
    border: 1px solid $color-btn-borde ;
}
.buttton-enviar:active{
    background-color:$color-btn-active;
    padding: 13px;
}
</style>