import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    const [playername, setPlayername] = useState('');
    console.log( ' playername ', playername )
    return (
        <div class="select">
            <h2> { props.location.state.name }, please select a Madlibz</h2>
            <form>
                <label>
                    Templates:
                </label>
                <br></br>
                <Link to="/form">
                    <button>
                        Form for this madlibz
                    </button>
                </Link>
            </form>
        </div>
    );
};