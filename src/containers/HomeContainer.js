import { connect } from "react-redux";
import Home from "../components/Home" // components
import { addToCart } from "../Services/Actions/actions" // actions

// 4. CONTAINER
//     ->
//     connect redux with react
//     import react-redux, actions, components
//     use mapDispatchToProps
//     use mapStateToProps


// mapStateToProps : used to send data from STORE to other components
const mapStateToProps = state => (
    {
        // data: state.cardItems.cardData for adding single cardItems

        data: state.cardItems
    }
)



// mapDispatchToProps : send data from VIEW to STORE
const mapDispatchToProps = dispatch => (
    {
        // "addToCartHandler" is a function
        addToCartHandler: data => dispatch(addToCart(data))
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Home)