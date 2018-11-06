<template>
  <v-container>
    <v-layout>
      <v-flex 
        v-for="dog in dogs" 
        :key="`flex-${dog.url}`"
      >
        <dog-card 
          :key="dog.url" 
          :url="dog.url"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import DogCard from './DogCard.vue';
export default {
    components:{
        DogCard
    },
    data(){
        return{
            dogs: [
                {
                    url: "https://images.dog.ceo/breeds/pembroke/n02113023_12248.jpg"
                }
            ]
        }
    }
    
}
</script>
