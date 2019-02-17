import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    },
    mutations: {
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        },
        asyncIncrement: (state, payload) => {
            state.counter+=payload;
        }
    },
    actions: {
        increment: context => {
            context.commit('increment');
        },
        decrement: ({ commit }) => {
            commit('decrement');
        },
        asyncIncrement: ({ commit }, payload) => {
            setTimeout( () => {
                commit('asyncIncrement', payload.by);
            }, payload.duration);
        },
        asyncDecrement: ({ commit }) => {
            setTimeout( () => {
                commit('decrement');
            }, 1000);
        },
    }
});