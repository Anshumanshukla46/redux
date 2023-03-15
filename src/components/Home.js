import React from "react";

function Home(props) {

    // props.data is RELATED BECAUSE data IS USED IN "mapStateToProps"
    console.log("HOME", props.data);    // now this function is getting "addToCartHandler" from "homecontainer.js" 
    // home to container to app.js
    // do this for each components



    return (
        <div>




            <h1>Home Component</h1>
            <div>
                <div className="card-wrapper">

                    <div className="img-wrapper item">
                        <img src="https://media.croma.com/image/upload/v1662703724/Croma%20Assets/Communication/Mobiles/Images/261934_qgssvy.png" alt="phone image" />
                    </div>


                    <div className="text-wrapper item">

                        <span>I-Phone</span>
                        <span>Price: $1000.00</span>

                    </div>

                    <div className="btn-wrapper item">
                        <button
                            onClick={() => props.addToCartHandler({ price: 1000, name: "iphone" })}>

                            Add To Cart

                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;