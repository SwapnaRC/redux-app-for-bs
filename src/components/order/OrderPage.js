import React, { Component } from "react";
import {
    Button,
  InputGroup,
  InputGroupAddon,
  Form,
  Col,
  Input,
  InputGroupText

} from "reactstrap";
import axios from 'axios';
class OrderPage extends Component {

constructor(props){
    super(props);
    this.state={
        customer_id:"",
        customer_name:"",
        address:"",
        order_date:"",
        category_name:"",
        product_name:"",
        mrp:"",
        discount:"",
        unit:""

    };
}
    onSubmit(e){
       e.preventDefault();
        const form=e.target;
        const result=new FormData(form);
      
       
        axios({
                method:"post",
                url:"/add_order_product",
                data:result
        })
        .then(response =>{
            alert(response.data);
            if(response.data === true){
               // console.log(response);
                alert("saving data");
            }
            
        })
        .catch(response =>{
        console.log(response);
      
        });
    }



  render() {
    return (
      <div>
        <h1>Order Details</h1>
        <div className="card">
          <div className="card-header">Order Product</div>
          <div className="card-body">
          <Form onSubmit={this.onSubmit} >
            <div className="row">
            <Col md="12">
            <h3><u> Customer  Information</u></h3>
            </Col>
                <Col md="3">
             
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      @
                      </InputGroupText>
                    <Input
                      placeholder=" Customer ID"
                      type="text"
                      id="customer_id"
                      name="customer_id"
                    />
                   
                 </InputGroupAddon>
                  </InputGroup>
                  <br/>
                  </Col>
           
                  <Col md="3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      @
                      </InputGroupText>
                    <Input
                      placeholder=" Customer Name"
                      type="text"
                      id="customer_name"
                      name="customer_name"
                    />
                  
                 </InputGroupAddon>
                  </InputGroup>
                  <br/>
                  </Col>
                  <Col md="3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      @
                      </InputGroupText>
                    <Input
                      placeholder="Address"
                      type="text"
                      id="address"
                      name="address"
                    />
                 </InputGroupAddon>
                  </InputGroup>
                  </Col>
              
            <Col md="3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      @
                      </InputGroupText>
                    <Input
                      placeholder="Date"
                      type="text"
                      id="order_date"
                      name="order_date"
                    />
                 </InputGroupAddon>
                  </InputGroup>
                  </Col>


                  <br/>
                  <Col md="12">
            <h3><u>Product  Information</u></h3>
            </Col>
                  <Col md="3">
               
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      @
                      </InputGroupText>
                    <Input
                      placeholder="Category Name"
                      type="text"
                      id="category_name"
                      name="category_name"
                    />
                 </InputGroupAddon>
                  </InputGroup>
                  </Col>
                  <br/>
                  <Col md="3">
               <InputGroup>
                 <InputGroupAddon addonType="prepend">
                   <InputGroupText>
                   @
                   </InputGroupText>
                 <Input
                   placeholder="Product Name"
                   type="text"
                   id="product_name"
                   name="product_name"
                 />
              </InputGroupAddon>
               </InputGroup>
               </Col>
               <br/>
                  <Col md="3">
               <InputGroup>
                 <InputGroupAddon addonType="prepend">
                   <InputGroupText>
                   @
                   </InputGroupText>
                 <Input
                   placeholder="M R P"
                   type="number"
                   id="mrp"
                   name="mrp"
                 />
              </InputGroupAddon>
               </InputGroup>
               </Col>
               <br/>
                  <Col md="3">
               <InputGroup>
                 <InputGroupAddon addonType="prepend">
                   <InputGroupText>
                   @
                   </InputGroupText>
                 <Input
                   placeholder="Discount"
                   type="number"
                   id="=discount"
                   name="discount"
                 />
              </InputGroupAddon>
               </InputGroup>
               </Col>
               <br/>
             
                  <Col md="3">
                  <br/>
               <InputGroup>
                 <InputGroupAddon addonType="prepend">
                   <InputGroupText>
                   @
                   </InputGroupText>
                 <Input
                   placeholder="Unit"
                   type="number"
                   id="=unit"
                   name="unit"
                 />
              </InputGroupAddon>
               </InputGroup>
               </Col>
               <Col md="3">
               <br/>
               {/* <Input  type="submit"  color="success" style={{float: "right",marginLeft: "10px"}}>Submit</Input> */} 
               <Button color="success" type="submit"  >Save</Button> <span style={{ "marginLeft": "3px" }}></span>
               
            </Col>
                  </div>

            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderPage;  
