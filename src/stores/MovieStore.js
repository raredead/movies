import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [
            {
                id: 1,
                original_title: "Spider-man",
                overview: "After being bitten by a genetically altered spider at Oscorp",
                poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
                release_date: "2002-05-01",
                isWatched: false,
            },
            {
                id: 2,
                original_title: "The Batman",
                overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City",
                poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
                release_date: "2022-03-01",
                isWatched: true
            },
        ],
        activeTab: 1
    })
})