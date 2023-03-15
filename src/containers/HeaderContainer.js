import { connect } from "react-redux";
import Header from "../components/Header" // components

// 4. CONTAINER
//     ->
//     connect redux with react
//     import react-redux, actions, components
//     use mapDispatchToProps
//     use mapStateToProps

const mapStateToProps = state => (
    {
        data: state.cardItems
    }
)

const mapDispatchToProps = dispatch => (
    {

    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Header)