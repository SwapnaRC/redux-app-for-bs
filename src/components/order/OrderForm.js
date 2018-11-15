import React,{PropTypes} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const OrderForm = ({order, onChange, errors}) => {
return(
<div>
<InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="Order ID"
          name="oid"
          label="oid"
          value={order.oid}
          onChange={onChange}
          error={errors.oid} />
      </InputGroup>
      <br />
     
      <br />
      <InputGroup>
      <InputGroupAddon addonType="append">@</InputGroupAddon>
        <Input placeholder="Order Name" />
      </InputGroup>
      <br />

      <InputGroup>
        <InputGroupAddon addonType="prepend">
        <Input placeholder="Order " />
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
        <Input placeholder="Amount" type="number" step="1" />
      </InputGroupAddon>
      </InputGroup>

</div>
);
};
OrderForm.propTypes = {
    course: PropTypes.object.isRequired,
    // allAuthors: PropTypes.array.isRequired,
    // onSave: PropTypes.func.isRequired,
     onChange: PropTypes.func.isRequired,
    // saving: PropTypes.bool,
    errors: PropTypes.object
  };
export default OrderForm;  
