import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Oxo extends Component {
    
    render() {
        
        const { title } = this.props;

        return (
            <div>
                <h1>{title}</h1>
                
            </div>
        )
    }
}

Oxo.propTypes = {
    title : PropTypes.string.isRequired	
}

Oxo.defaultProps = {
    //title : "Default Title"
}
    
export default Oxo;