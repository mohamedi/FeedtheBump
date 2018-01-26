import axios from "axios";

export default {
    // Gets all water
    getMeals : function () {
        return axios.get("/api/meals");
    },
    // Gets the book with the given id
    getMeal : function (id) {
        return axios.get("/api/meals/" + id);
    },
    // Deletes the book with the given id
    deleteMeal : function (id) {
        return axios.delete("/api/meals/" + id);
    },
    // Saves a book to the database
    saveMeal : function (mealData) {
        return axios.post("/api/meals", mealData);
    },

    //Water
    getWaters : function () {
        return axios.get("/api/water"); 
    },
    // Gets the water with the given id
    getWater : function (id) {
        return axios.get("/api/water/" + id);
    },
    // Deletes the book with the given id
    deleteWater : function (id) {
        return axios.delete("/api/water/" + id);
    },
    // Saves a book to the database
    saveWater : function (waterData) {
        return axios.post("/api/water", waterData);
    },

    //gets articles
    getArticles : function () {
        return axios.get("https://healthfinder.gov/FreeContent/developer/Search.json?api_key=rlaulqdetivhvqxo&keyword=pregnancy");
    },

    getArticles2 : function () {
        return axios.get("/api/articles");
    },
};