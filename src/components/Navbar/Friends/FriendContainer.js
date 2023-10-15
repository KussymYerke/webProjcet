import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {

    return{
        navBarPage: state.navbarPage
    }
}

const FriendContainer = connect(mapStateToProps)(Friends);

export default FriendContainer;
