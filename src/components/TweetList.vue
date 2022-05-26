<template>
    <div class="container">
        <h1 class="text-center mb-4 text-light">Lista de Tweets </h1>
        <p  v-if="tweets.length === 0">No hay ningun Tweet</p>
        <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
            <p class="tweet__title">{{ tweet.username }}</p>
            <p class="tweet__text">{{ tweet.tweet}}</p>
            <span >{{ formatDate(tweet.createdAt)}}</span>
            <Close @click="deleteTweet(tweet.id)"></Close>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import 'moment/locale/es'
import { Close } from './icons/index'
import { deleteTweetApi, deteleTweetApi} from '../api/tweet'

export default {
props:{
    tweets: Array,
    reloadTweets: Function,
},
components:{
    Close,
},
setup(props){
    const formatDate = (date) =>{
        return moment(date).fromNow();
    };
    const deleteTweet = (idTweet) =>{
        deleteTweetApi(idTweet);
        props.reloadTweets();
    }
    return{
        formatDate,
        deleteTweet,
    }
}
}
</script>

<style lang="scss" >
$color-obscuro:#0d0d0d;

.tweet{
    position: relative;
    padding: 20px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 11px );
    -webkit-backdrop-filter: blur( 11px );
    border-radius: 10px;
    
    &__title{
    position:absolute;
    top: -25px;
    left: 10px;
    padding: 0 10px;
    font-weight: bold;
    font-size: 2rem;

    }
&__text{
    color: $color-obscuro;
}
span{
    position: absolute;
    right: 10px;
    bottom: 2px;
    font-size: 12px;
    color: $color-obscuro;
    padding: 0 20px;
}
}

svg{
    width: 20px;
    height: 20px;
    &:hover{
        cursor: pointer;
        color: #f00;
    }
}
</style>