export const state = () => ({
    urlActive: "",
})

export const mutations = {
    setUrlActive(state, url) {
        state.urlActive = url
    },
    // setNewList(state, data) {
    //     console.log(data)
    //     state.newList = data
    // },
}