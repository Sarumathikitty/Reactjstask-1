import React from "react";
const App = () => {
  const [first, setfirst] = React.useState("");
  const [last, setlast] = React.useState("");
  const [email, setemail] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [status, setstatus] = React.useState("");
  const [food, setfood] = React.useState([]);
  const [state, setstate] = React.useState([]);
  const [arr, setarr] = React.useState([]);
  const [password, setpassword] = React.useState("");
  const [repassword, setrepassword] = React.useState("");
  
  function handleEnter(event) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }
  
  function submit() {
    if (password == repassword) {
      return setarr(
        arr.concat([
          { first, last, email, status, food, country,  },
        ]),

        setfirst(""),
        setlast(""),
        setemail(""),
        setrepassword(""),
        setpassword(""),
        setstatus(""),
        setfood(""),
        setcountry("")
      );
    } else {
      alert("confirm  Password is incorrect");
    }
  }
   
    return (
    <div className="wrapper">
      <div className="form-wrapper">      
        <form> 
          <div className="firstName">
            <label>First Name</label>
            <input type="text" value={first} 
            required
            onChange={(e) => setfirst(e.target.value)}
             onKeyDown={handleEnter}
            />
          </div>
          <div className="lastName">
            <label>Last Name</label>
            <input  type="text" value={last} 
            required
            onChange={(e) => setlast(e.target.value)}          
            onKeyDown={handleEnter}
            />
          </div>
          <div className="email">
            <label>Email</label>
            <input type="text" value={email} 
            required
            onChange={(e) => setemail(e.target.value)}
            onKeyDown={handleEnter}          
            />
          </div>
          <div className="password">
            <label>Password</label>
            <input type="text" value={password} 
            required
            onChange={(e) => setpassword(e.target.value)}name="password"
            onKeyDown={handleEnter}          
            />
          </div>
          <div className=" confirm-password">
            <label> Confirm Password </label>   
            <input type="text" value={repassword} 
            onChange={(e) => setrepassword(e.target.value)}
            className=""placeholder="retype password"type="text" name="password"
            onKeyDown={handleEnter}
            />
            </div>
  
            <div className="status">
              <label>Marital Status</label>
              <div  value={status} 
              required
              onKeyDown={handleEnter}
            onChange={(e) => setstatus(e.target.value)}>            
          <input type="radio" value="Single" name="" /> Single
          <input type="radio" value="Married" name="" /> Married
          <input type="radio" value="Can't say" name="" /> Cant't say
          </div>
        
        </div>  
        <label>Choice of Food</label>
        <div className="status">
        <div value={food} 
        required
        onKeyDown={handleEnter}
            onChange={(e) => setfood(e.target.value)}>
        <input type="checkbox" value="briyani" name="food" /> Briyani
          <input type="checkbox" value="fried rice" name="meal" /> Fried Rice
          <input type="checkbox" value="burger" name="foods" /> Burger
          <input type="checkbox" value="pizza" name="meals" /> Pizza          
          </div>          
          </div>
  
              <div className="country">
                <label>Choose a Country</label>
                <select value={country}
                required
               onChange={(e) => setcountry(e.target.value)}>
                  <option value="India">India</option>
                  <option value="America">America</option>
                  onKeyDown={handleEnter}                
                </select>
              </div>
  
              <div className="statename">
                <label>State</label>
                <select value={state}
                required
             onChange={(e) => setstate(e.target.value)}>
                <option value="Tamilnadu">Tamilnadu</option>
                  <option value="Chennai">Chennai</option>  
                  <option value="Kerala">Kerala</option> 
                  <option value="Mexico">Mexico</option>
                  <option value="Newyork">Newyork</option>  
                  <option value="Texas">Texas</option> 
                  onKeyDown={handleEnter}                 
                  </select>
              </div>
  
              <div className="register">
                <button type="submit" onClick={() => submit()}>
                Submit
              </button>
              </div>
        </form>
      </div>      
      {arr==""? <h1>NO DATA FOUND</h1>:
      <div className="rightside">
        <table className="sty1">
          <tr>
            <th>FirstName</th>         
            <th>LastName</th>
            <th>Email Id</th> 
            <th>Marital Status</th> 
            <th>Food</th> 
            <th>Country</th>       
          </tr>
          <tbody>
                {arr.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.first}</td>
                      <td>{data.last}</td>
                      <td>{data.email}</td>
                      <td>{data.status}</td>
                      <td>{data.food}</td>
                      <td>{data.country}</td>
                      <td>{data.state}</td>
                    </tr>
                  );
                })}                
              </tbody>
            </table>  
      
              </div> }
                                
      </div>     
        
      )
                       
  };
  
  
  export default App;
  
