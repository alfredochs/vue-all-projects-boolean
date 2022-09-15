<template>
    <div>
        <h1>Single Pokemon</h1>
        <h2>{{pokemonName}}</h2>
        <h2>{{pokemonID}}</h2>
        <div v-for="sprite,i in pokemonData[0].sprites" :key="i">
            <img :src="sprite" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "SinglePokemon",
    data() {
        return {
            apiGeneral: "https://pokeapi.co/api/v2/pokemon/",
            pokemonData: []
        };
    },
    props: {
        pokemonName: {
            type: String,
        },
        pokemonID: {
            type: [String, Number],
        },
    },
    methods: {
        /**
         ** Return data for pokemonData after elaborate it, like types and sprites
         *TODO work in the sprites
         */
        fetchDataSinglePokemon() {
            return new Promise((resolve, reject) => {
                const obj = {};
                axios.get(this.apiGeneral + this.pokemonID).then((resp) => {
                    console.log("🚀 ~ file: SinglePokemon.vue ~ line 35 ~ axios.get ~ resp", resp.data);
                    obj.weight = resp.data.weight;
                    //types key
                    const types = resp.data.types;
                    const arrTypes = [];
                    for (const key in types) {
                        arrTypes.push(types[key].type.name);
                    }
                    obj.types = arrTypes;
                    //sprites key
                    const sprites = resp.data.sprites;
                    const arrSprites = [];
                    for (const key in sprites) {
                        if (sprites[key] != null) {
                            arrSprites.push(sprites[key]);
                        }
                    }
                    //TODO
                    obj.sprites = arrSprites;
                });
                this.pokemonData.push(obj);
                resolve();
                reject();
            }).then(() => {

            })
                ;
        }
    },
    created() {
        this.fetchDataSinglePokemon();
    },

};
</script>

<style>

</style>