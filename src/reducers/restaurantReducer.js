import {
     RESTAURANTS_LIST_REQUEST,
     RESTAURANTS_LIST_SUCCESS,
     RESTAURANTS_LIST_FAIL
    } from '../constants/restaurantsConstants'

    export const restaurantListReducer =(state = { restaurants: [] }, action) => {
        switch(action.type){
            case RESTAURANTS_LIST_REQUEST:
                return {loading: true, restaurants :[] }
            case RESTAURANTS_LIST_SUCCESS:
                return {loading:false, restaurants:action.payload}
            case RESTAURANTS_LIST_FAIL:
                return {loading:false, error: action.payload}
            default:
                return state
        }
    }