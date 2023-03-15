import { Connect } from "react-redux";
import Home from "../components/Home" // components
import { addToCart } from "../Services/Actions/actions" // actions

// 4. CONTAINER
//     ->
//     connect redux with react
//     import react-redux, actions, components
//     use mapDispatchToProps
//     use mapStateToProps


const mapStateToProps = state => (
    {

    }
)

const mapDispatchToProps = dispatch => (
    {
        addToCartHandler: data => dispatch(addToCart(data))
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home;