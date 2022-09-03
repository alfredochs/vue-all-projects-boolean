<template>
    <div class="input-group mb-3">
        <select class="form-select" aria-label="Default select example" v-model="selectedType"
            @change="$emit('filter', selectedType)">
            <option value="" selected disabled>Select a type</option>
            <option :value="type" v-for="type, i in types" :key="i">{{ type }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "SearchBarPokemon",
    data() {
        return {
            selectedType: ""
        };
    },
    props: {
        types: Array,
    },
};
</script>

<style>
</style>