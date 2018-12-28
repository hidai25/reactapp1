import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Dishdetail extends Component {
  renderDish(dish) {
         if (dish != null) {
             return (
                 <div className='col-12 col-md-5 m-1'>
                     <Card>
                         <CardImg width="100%" src={dish.image} alt={dish.name} />
                         <CardBody>
                             <CardTitle>{dish.name}</CardTitle>
                             <CardText>{dish.description}</CardText>
                         </CardBody>
                     </Card>
                 </div>
             )
         }
         else {
             return (<div></div>)
         }
     }

     render() {
         const dish = this.props.dish
         if (dish == null) {
             return (<div></div>)
         }
         const dishItem = this.renderDish(dish)
         return (
             <div className='row'>
                 {dishItem}
                
             </div>
         )
     }
 }



export default Dishdetail
