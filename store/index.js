import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    cards: [
        {
            "id": "1f571945-0b19-48d4-87ca-138c69b99974",
            "xOffset": 696,
            "yOffset": 796,
            "width": 317,
            "height": 490,
            "type": "tally",
            "categories": [
                "personal"
            ],
            "title": "Erin",
            "description": "Huber",
            "createdAt": "Mon Nov 23 2015 06:45:26 GMT+0000",
            "lastUpdate": "Sun Sep 23 2018 22:10:57 GMT+0000",
            "data": {
                "defaultStep": 1,
                "logs": [
                    {
                        "label": "enim",
                        "date": "Sun May 01 2016 16:42:59 GMT+0000",
                        "value": 308,
                        "total": 519
                    },
                    {
                        "label": "esse",
                        "date": "Sun Jul 02 2017 05:20:00 GMT+0000",
                        "value": 158,
                        "total": 625
                    },
                    {
                        "label": "velit",
                        "date": "Fri Dec 25 2015 21:33:09 GMT+0000",
                        "value": 231,
                        "total": 513
                    }
                ]
            }
        }
    ]
})

// export type RootState = ReturnType<IEntity>

export const getters = {
    allCards: state => state.cards
}

export const mutations = {
    UPDATE_LABEL: (state, newLabel) => (state.label = newLabel),
    ADD_CARD: (state, newCard) => (state.cards.push(newCard))
}
/*
export const actions = {
    addCard: function({ commit }, payload) {
        commit('ADD_CARD', payload)
    },
    updateLabel: function({ commit }, payload) {
        commit('UPDATE_LABEL', payload)
    }
}
*/