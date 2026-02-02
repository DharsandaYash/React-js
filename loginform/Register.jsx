import { useState } from "react";

function Register()
{
        const [email,setemail]=useState("");
        const [pass,setpass]=useState("");
        const [repass,setrepass]=useState("");
        const [fnm,setfnm]=useState("");
        const [lnm,setlnm]=useState("");
        const [gen,setgen]=useState("");
        const [con,setcon]=useState("");
        const [fc,setfc]=useState("");
        const [sc,setsc]=useState("");
        const [a,setA]=useState()

        function get_data()
        {
                setA(10)
        }

        

    return (
    <center>
        <div className="my">
            <h1>Registration Form</h1>
            <form>
                    <div>
                            <input type="text" name="email" placeholder="Email" onChange={(e) => setemail(e.target.value)}/>
                    </div>

                    <div>
                            <input type="text" name="password" placeholder="Password" onChange={(e) => setpass(e.target.value)}/>
                    </div>

                    <div>
                            <input type="text" name="re-password" placeholder="Re-type Password" onChange={(e) => setrepass(e.target.value)}/>
                    </div>

                    <div>
                            <input type="text" name="firstname" placeholder="First Name" onChange={(e) => setfnm(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" name="lastname" placeholder="Last Name"  onChange={(e) => setlnm(e.target.value)}/>
                    </div>

                    <div>
                            Male<input type="radio" name="gender" value="male" defaultChecked onChange={(e)=>setgen(e.target.value)}/>
                            Female<input type="radio" name="gender" value="female" onChange={(e)=>setgen(e.target.value)}/>
                    </div>
 
                    <div>
                            <select onChange={(e)=>setcon(e.target.value)}>
                                    <option>India</option>
                                    <option>U.S.A</option>
                                    <option>U.K</option>
                            </select>
                    </div>
                    <div>
                            <input type="checkbox" name="fc" onChange={(e)=>setfc(e.target.checked)}/>I Agree with terms and conditions
                    <div>
                            <input type="checkbox" name="sc" onChange={(e)=>setsc(e.target.checked)}/>i want to receive the newslatter
                    </div>
                    </div>
                    <div>
                        <button type="button" name="button" onClick={get_data}>Register</button>
                    </div>

                    <table border={1}>
                {a && (

                        <>
                        <tr>
                        
                                  <td>Email</td>
                                  <td>Password</td>
                                  <td>Re-Type Password</td>
                                  <td>First Name</td>
                                  <td>Last Name</td>
                                  <td>Gender</td>
                                  <td>Country</td>
                                  <td>First Condition</td>
                                  <td>Second Condition</td>
                        </tr>
                         <tr>
                                 <td>{email}</td>
                                 <td>{pass}</td>
                                 <td>{repass}</td>
                                 <td>{fnm}</td>
                                 <td>{lnm}</td>
                                 <td>{gen}</td>
                                 <td>{con}</td>
                                 <td>{fc.toString()}</td>
                                <td>{sc.toString()}</td>
                          </tr>
                        
                        </>
                  )}

                </table>
            </form>
        </div>
    </center>
    )
}
export default Register;