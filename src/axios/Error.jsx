import React, { useState } from "react";
// import "../index.css"
function Error() {

    let [error, setError] = useState([])

    return (
        <>
            <div id="err-div">
                <h1>Page not found</h1>
                <br /><br />
                <h1>404 Error</h1>
            </div>
        </>
    )
}
export default Error
