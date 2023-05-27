import { connect } from "react-redux";
import Home from "../components/Home"; // component
import { addToCart } from "../Services/Actions/actions"; // actions

// 4. CONTAINER
//     ->
//     connect redux with react
//     import react-redux, actions, components
//     use mapDispatchToProps
//     use mapStateToProps


// mapStateToProps : to send data from STORE to other components
const mapStateToProps = state => (
    {
        // data: state.cardItems.cardData for adding single cardItems

        data: state.cardItems
    }
)


// mapDispatchToProps : send data from VIEW(UI) to STORE
const mapDispatchToProps = dispatch => (
    {
        // "addToCartHandler" is a function
        addToCartHandler: data => dispatch(addToCart(data))
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Home)