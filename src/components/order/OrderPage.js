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
import $ from "jquery";
import axios from "axios";
import DataTable from "datatables.net";
// import '../../../Datatable/jquery.dataTables.min.css';
//import '../common/Datatable/jquery.dataTables.min.css';

let isAct =0;
class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: "",
      product_id: "",
      customer_name: "",
      customer_address: "",
      date_joined: "",
      category_name: "",
      product_name: "",
      mrp: "",
      discount: "",
      unit: "",
      OrderDetails: []
    };
  }
  // onSubmit(e) {
  //   e.preventDefault();
  //   const form = e.target;
  //   const result = new FormData(form);

  //   axios({
  //     method: "post",
  //     url: "http://localhost:8081/add_order_product",
  //     data: result
  //   })
  //     .then(response => {
  //       alert(response.data);
  //       if (response.data === true) {
  //         // console.log(response);
  //         alert("saving data");
  //       }
  //     })
  //     .catch(response => {
  //       console.log(response);
  //     });
  // }
  onSubmit  (e) {
    e.preventDefault();
   

      const form = e.target;
      const result = new FormData(form);
alert(this.state.category_id);
      let saveorder;
     var that=this;
      if (isAct === 0) {
        saveorder = 'http://localhost:8081/add_order_product';
      }
      else {
        saveorder = 'http://localhost:8081/update_order_product';
        result.append("product_id",that.state.product_id);
        result.append("category_id",that.state.category_id);
        
      }
            axios({
              method: 'post',
              url: saveorder,
           
              data: result
            })
              .then((res) => {
                if (res.data === true) {
                  if (isAct === 0) {
                   alert("saved")
                  }
                  else {
                   alert("updated");
                   
                  }

                  this.setState({
                    category_id: "",
                    product_id: "",
                    category_name: "",
                    product_name: "",
                    mrp: "",
                    unit: "",
                    discount: ""
                  });
                  isAct =0;
                  this.getDetails();
                }
                else {
                alert("Failed")
                

                }
              })
          
      
        .catch((response) => {
          console.log(response);
        });
    
  }


  componentWillMount() {
    this.getDetails();
  }
  getDetails() {
    axios({
      method: "POST",
      url: "http://localhost:8081/get_order_product"
    })
      .then(response => {
        var Order = [];
        response.data.map((value, index) => {
          var order = [];
          order.push(index + 1);
          order.push(value.category_name);
          order.push(value.mrp);
          order.push(value.unit);
          order.push(value.discount);
          order.push(value.product_name);
          order.push(
            "<button type='button' data='" +
              value.category_id +
              "," +
              value.product_id +
              "," +
              encodeURI(value.category_name) +
              ", " +
              encodeURI(value.product_name) +
              "," +
              value.mrp +
              "," +
              value.unit +
              "," +
              value.discount +
              "'   class='btn btn-success edit" +
              index +
              "'>Edit </button>&nbsp;&nbsp;<button type='button'  data1='" +
              value.category_id +
              "," +
              value.product_id +
              "' class='btn btn-danger delete" +
              index +
              "'>Delete </button>"
          );
          Order.push(order);
        });
        console.log("order" + Order);
        this.setState({ OrderDetails: Order });
      })
      .catch(response => {
        console.log("error" + response);
      });
  }

  EditOrderProduct(
    category_id1,
    product_id1,
    category_name1,
    product_name1,
    mrp1,
    unit1,
    discount1
  ) {
    alert(category_id1);
    console.log(category_name1);
    this.setState({
      category_id: category_id1,
      product_id: product_id1,
      category_name: category_name1,
      product_name: product_name1,
      mrp: mrp1,
      unit: unit1,
      discount: discount1,
     
    });
    isAct =1;
    // this.setState( {category_name: category_name1,product_name:product_name1} );
  }

  onchange (e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  setDataTable() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.state.OrderDetails,
      reponsive: true,
      deferRender: true,
      paging: true,
      lengthChange: false,
      searching: true,
      destroy: true,
      ordering: true,
      info: true,
      autoWidth: false,

      sDom: "lfrtip",
      columnDefs: [
        {
          targets: 6,

          createdCell: (td, cellData, rowData, row, col) => {
            $(td).on("click", ".edit" + row, () => {
              var str = $(".edit" + row).attr("data");
              var res = str.split(",");

              this.EditOrderProduct(
                res[0],
                res[1],
                decodeURI(res[2]),
                decodeURI(res[3]),
                res[4],
                res[5],
                res[6]
              );
            });

            $(td).on("click", ".delete" + row, () => {
              var str1 = $(".delete" + row).attr("data1");
              var res1 = str1.split(",");
              this.DeleteOrderProduct(res1[0], res1[1]);
            });
          }
        }
      ]
    });
  }

  DeleteOrderProduct(cid, pid) {
    axios({
      method: "POST",
      url: "http://localhost:8081/delete_order_product",
      data: "category_id=" + cid + "&product_id=" + pid
    })
      .then(response => {
        if (response.data === true) {
          alert("Deleted");
          this.getDetails();
        } else {
          alert(" not deleted");
        }
      })
      .catch(response => {
        //handle error
        console.log(response);
      });
  }
  render() {
    this.setDataTable();

    return (
      <div>
        <h1>Order Details</h1>
        <div className="card">
          <div className="card-header">Order Product</div>
          <div className="card-body">
            <Form onSubmit={this.onSubmit}>
              <div className="row">
                <Col md="12">
                  <h3>
                    <u> Customer Information</u>
                  </h3>
                </Col>

                <Col md="3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                      <Input
                        placeholder=" Customer Name"
                        type="text"
                        id="customer_name"
                        name="customer_name"
                        value={this.state.customer_name}
                        onChange={this.onchange}
                      />
                    </InputGroupAddon>
                  </InputGroup>
                  <br />
                </Col>
                <Col md="3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                      <Input
                        placeholder="Address"
                        type="text"
                        id="customer_address"
                        name="customer_address"
                        value={this.state.customer_address}
                        onChange={this.onchange}
                      />
                    </InputGroupAddon>
                  </InputGroup>
                </Col>

                <br />
                <Col md="12">
                  <h3>
                    <u>Product Information</u>
                  </h3>
                </Col>
                <Col md="3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                      <Input
                        placeholder="Category Name"
                        type="text"
                        id="category_name"
                        name="category_name"
                        value={this.state.category_name}
                        onChange={this.onchange}
                      />
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <br />
                <Col md="3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                      <Input
                        placeholder="Product Name"
                        type="text"
                        id="product_name"
                        name="product_name"
                        value={this.state.product_name}
                        onChange={this.onchange}
                      />
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <br />
                <Col md="3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                      <Input
                        placeholder="M R P"
                        type="number"
                        id="mrp"
                        name="mrp"
                        value={this.state.mrp}
                        onChange={this.onchange}
                      />
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <br />
                <Col md="3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                      <Input
                        placeholder="Discount"
                        type="number"
                        id="=discount"
                        name="discount"
                        value={this.state.discount}
                        onChange={this.onchange}
                      />
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <br />

                <Col md="3">
                  <br />
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                      <Input
                        placeholder="Unit"
                        type="number"
                        id="=unit"
                        name="unit"
                        value={this.state.unit}
                        onChange={this.onchange}
                      />
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col md="3">
                  <br />
                  {/* <Input  type="submit"  color="success" style={{float: "right",marginLeft: "10px"}}>Submit</Input> */}
                  <Button color="success" type="submit">
                    Save
                  </Button>{" "}
                  <span style={{ marginLeft: "3px" }} />
                </Col>
              </div>
            </Form>
            <br />
            <Col md="9">
              {/* <LenderRolesDataTable /> */}

              <table
                className="display table table-bordered"
                width="100%"
                ref={el => (this.el = el)}
              >
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Category Name</th>
                    <th>MRP</th>
                    <th>Unit</th>
                    <th>Discount</th>
                    <th>Product Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody />
              </table>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderPage;
