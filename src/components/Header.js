import React from "react";

function Header(props) {

    return (
        <div>

            <div className="add-to-cart">

                {/* number of items in cart */}
                <span>{props.data.length}</span>

                <img src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg" alt="cart" />

            </div>

        </div>
    )
}

export default Header;