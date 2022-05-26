<template>
<div class="cont">
  <Menu :openCloseForm="openCloseForm" :showForm="showForm"></Menu>
  <TweetForm :showForm="showForm" :reloadTweets="reloadTweets" :openCloseForm="openCloseForm" ></TweetForm>
  <TweetList :tweets="tweets" :reloadTweets="reloadTweets"></TweetList>
</div>
  
</template>

<script>
import { ref } from 'vue';
import Menu from '@/components/Menu'
import TweetForm from '@/components/TweetForm'
import useFormTweet from '@/hooks/useFormTweet'
import TweetList from './components/TweetList'
import { getTweetsApi } from './api/tweet'
export default {
  name: 'App',
  components:{
    Menu,
    TweetForm,
    TweetList,
},
setup(){
  let tweets = ref(getTweetsApi().reverse());

  const reloadTweets = () =>{
    tweets.value = getTweetsApi().reverse();
  }

  return {
    ...useFormTweet(),
    tweets,
    reloadTweets,
  }
}
}
</script>

<style lang="scss">
$color-claro:#ddd;
 
.cont{
  background:linear-gradient(to bottom, #613dc1, #9657c0, #ba76c2, #d39ac8, #e3c0d5);;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: scroll;
}
.tweet-form{
  margin-top: 20px;
  height: 0;

  overflow: hidden;
  &.open{
  height: auto;
}

  form{
    margin-bottom: 50px;
    input{
      margin-bottom: 10px;
      &::placeholder { color: $color-claro; }
    }
    textarea{
      margin-bottom: 10px;
      &::placeholder { color: $color-claro; }
    }
    button{
      width: 100%;
      margin-top: 10px;
    }
  }
}


</style>
