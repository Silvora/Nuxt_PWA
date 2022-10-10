export default ({ store, route, redirect, params, query, req, res }) => {
    //console.log("middleware")
    // console.log(route.name)
    store.commit("setUrlActive", route.name)
    //console.log(store.state)
}