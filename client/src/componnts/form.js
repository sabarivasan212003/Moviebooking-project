import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Forms extends React.Component {
   
    
  render() {
    return (
        <form>
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username"></input>
      </div>
    </div>
  <div class="form-row align-items-center">
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputName">Enter No Of tickets</label>
      <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe"></input>
    </div>
   
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary"  onClick={()=>{}}>Submit</button>
    </div>
  </div>
</form>
    );
  }
}
export default Forms;