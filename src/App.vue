<script setup>
import { useMovieStore } from './stores/MovieStore';
import Movie from './components/Movie.vue';

const movieStore = useMovieStore()
</script>

<template>
    <main>
        <header class="header">
            <img class="header-logo" src="/logo.svg" alt="Logo">
            <h2>My favorite movies</h2>
        </header>
        <div class="tabs">
            <button :class="['btn', {btn_green: movieStore.activeTab === 1}]">Favorite</button>
            <button :class="['btn', {btn_green: movieStore.activeTab === 2}]">Search</button>
        </div>
        <div class="movies" v-if="movieStore.activeTab === 1">
            <h3>All movies</h3>
            <Movie v-for="movie of movieStore.movies" 
            :key="movie.id" 
            :movie="movie" />
        </div>
        <div class="search" v-else="movieStore.activeTab === 2">Search</div>
    </main>
</template>

<style lang="scss">
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    &-logo {
        max-width: 50px;
        margin-right: 10px;
    }
}

.btn {
    border: none;
    width: 100px;
    height: 40px;
    font-size: 14px;
    margin: 0 10px;
    border-radius: 10px;
    cursor: pointer;
    background: #EFEFEF;
    transition: .3s ease-in-out;

    &_green {
        background: #37DF5C;
    }
}

.btn:hover {
    background: #aaa9a9;
}

.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}
</style>