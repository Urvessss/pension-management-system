import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

import { addBankService } from "./services/BankService";

const addBankDetails = () => {
    const[addBank, setAddBank] = useState('');
    const[accno, setAccno] = useState('');
    const[bankName, setBankName] = useState('');
    const[ifscCode, setIfscCode] = useState('');
    //const[bankName, setBankName] = useState('');
    const[branch, setBranch] = useState('');
    const[AccHolderName, setAccHolderName] = useState('');
    const history = useHistory();
    const {accno} = useParams();

    const saveBank = (e) => {
        e.preventDefault();
        
        const bank = {accno,bankName,branch,ifscCode,AccHolderName};
        if (accno) {
            //update
            addBankService.post(bank)
                .then(response => {
                    console.log('Bank data updated successfully', response.data);
                    history.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            addBankService.create(bank)
            .then(response => {
                console.log("bank added successfully", response.data);
                history.push("/");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (addBank) {
            addBankService.get(accno)
                .then(bank => {
                    setAccno(bank.data.accno);
                    setBankName(bank.data.bankName);
                    setBranch(bank.data.branch);
                    setIfscCode(bank.data.ifscCode);
                    setAccHolderName(bank.data.AccHolderName);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add Bank</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="accno"
                        value={accno}
                        onChange={(e) => setAccno(e.target.value)}
                        placeholder="Enter accno"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="bankName"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        placeholder="Enter bankName"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="ifscCode"
                        value={ifscCode}
                        onChange={(e) => setIfscCode(e.target.value)}
                        placeholder="Enter ifscCode"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="branch"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        placeholder="Enter branch"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="AccHolderName"
                        value={ifscCode}
                        onChange={(e) => setAccHolderName(e.target.value)}
                        placeholder="Enter AccHolderName"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveBank(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddEmployee;




// import { useState } from "react";
// import { Link, useHistory, useParams } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
// import employeeService from "../services/employee.service";

// const AddEmployee = () => {
//     const[name, setName] = useState('');
//     const[location, setLocation] = useState('');
//     const[department, setDepartment] = useState('');
//     const history = useHistory();
//     const {id} = useParams();

//     const saveEmployee = (e) => {
//         e.preventDefault();
        
//         const employee = {name, location, department, id};
//         if (id) {
//             //update
//             employeeService.update(employee)
//                 .then(response => {
//                     console.log('Employee data updated successfully', response.data);
//                     history.push('/');
//                 })
//                 .catch(error => {
//                     console.log('Something went wrong', error);
//                 }) 
//         } else {
//             //create
//             employeeService.create(employee)
//             .then(response => {
//                 console.log("employee added successfully", response.data);
//                 history.push("/");
//             })
//             .catch(error => {
//                 console.log('something went wroing', error);
//             })
//         }
//     }

//     useEffect(() => {
//         if (id) {
//             employeeService.get(id)
//                 .then(employee => {
//                     setName(employee.data.name);
//                     setLocation(employee.data.location);
//                     setDepartment(employee.data.department);
//                 })
//                 .catch(error => {
//                     console.log('Something went wrong', error);
//                 })
//         }
//     }, [])
//     return(
//         <div className="container">
//             <h3>Add Employee</h3>
//             <hr/>
//             <form>
//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         placeholder="Enter name"
//                     />

//                 </div>
//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="department"
//                         value={department}
//                         onChange={(e) => setDepartment(e.target.value)}
//                         placeholder="Enter Department"
//                     />

//                 </div>
//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="location"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                         placeholder="Enter Location"
//                     />
//                 </div>
//                 <div >
//                     <button onClick={(e) => saveEmployee(e)} className="btn btn-primary">Save</button>
//                 </div>
//             </form>
//             <hr/>
//             <Link to="/">Back to List</Link>
//         </div>
//     )
// }

// export default AddEmployee;
