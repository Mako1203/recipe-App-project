import { Link } from "react-router-dom";

function Error (){
    return (
        <div class="error">
        <div class="conteiner">
            <h3 class="error-title">An error has occurred</h3>
            <p class="error-describtion">Please check the internet connetion and try again.</p>
            <Link to = "/" class="Fresh-btn">Refresh the page</Link>
        </div>
    </div>
    );
}



export default Error