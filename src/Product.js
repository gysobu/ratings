import React, {Component} from 'react';
import {Media} from 'react-bootstrap';

class Product extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <Media>
                    {/* <Media.Left> */}
                        
                        <img width={80} height={64} src={this.props.data.imageUrl} />
                    {/* </Media.Left> */}
                     <Media.Body>
                        <h5>{this.props.data.productName}</h5>
                        {this.props.data.releasedDate}
                    <p>{this.props.data.description}</p>
                    </Media.Body> 
                </Media>
            </div>
        );
    }
}





export default Product;
