import { connect } from "react-redux";
import Header from "../components/Header" // components

// 4. CONTAINER
//     ->
//     connect redux with react
//     import react-redux, actions, components
//     use mapDispatchToProps
//     use mapStateToProps

// passing into component in the form of "props"

const mapStateToProps = state => (
    /* 
        "state" is "Redux store state" allows us to map specific part of store to 
        connected component

        check all item of store in index.js(reducer)
    */
    {
        data: state.cardItems
    }

    // this "cardItems" is comming from "reducer.js"
)

const mapDispatchToProps = dispatch => (
    {

    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Header)