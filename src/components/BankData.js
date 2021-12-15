import React from 'react'
import { getBankByIdService, addBankService,deleteBankService } from './services/BankService';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getBankById,addbankdetails,deletebankbyaccno } from '../redux/BankSlice';

const BankData = props => {
    const [accno, setAccno] = useState('');
    
    
    const dispatch = useDispatch();
    const bankDataFromStore = useSelector((state) => state.bank.bankState);
  //  const [addBank,setAddBank]=useSelector((state)=>state.bank.bankState);
    const [newBankObj, setNewBankObj] = useState('');
    const bankDataFromStore2 = useSelector((state) => state.bank.bankState2);




    const handleBank = (e) => {
        console.log('handleEmp');
        setAccno(e.target.value);
    }
    const handleAddBank = (e) => {
        console.log('handleAddEmp');
        setNewBankObj(e.target.value);
    }


    const submitGetBankById = (evt) => {
        evt.preventDefault();
        console.log('submitGetBankById');
        getBankByIdService(accno)
            .then((response) => { dispatch(getBankById(response.data)) })
            .catch(() => {
                alert(`Bank with accno: ${accno} not found.`);
            });

        //    console.log(Object.keys());
        setAccno('');
    }
    const submitDeleteBankById = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteBankById');
        deleteBankService(accno)
        
            .then((response) => { dispatch(deletebankbyaccno(response.data))
            alert('Bank Deleted '); })
            
            .catch(() => {
                alert(`Bank with accno: ${accno} not found.`);
            });

        //    console.log(Object.keys());
        setAccno('');
    }

const addbankdetails=(evt)=>{

    evt.preventDefault();
    console.log('submitAddBankById');
    addBankService(newBankObj)
        .then((response) => { dispatch(addbankdetails(response.data)) })
        .catch(() => {
            alert(`Bank with accnoaccno} not Added`);
        });

    //    console.log(Object.keys());
   setNewBankObj('accno','branch','bankName','accHolderName','ifscCode');
}

    
    
    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Bank Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Search Bank Account</p>
                <form className="form form-group form-primary" onSubmit={submitGetBankById}>
                    <input className="form-control mt-3" type="number" id="accno" name="accno" value={accno} onChange={handleBank} placeholder="Enter accno to search" />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Bank" />
                </form>
                <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>Accno </th>
                                <th>BankName</th>
                                <th>Branch</th>
                                <th>AccoundHolderName</th>
                                <th>ifcsCode</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{bankDataFromStore.accno}</td>
                                <td>{bankDataFromStore.bankName}</td>
                                <td>{bankDataFromStore.branch}</td>
                                <td>{bankDataFromStore.accHolderName}</td>
                                <td>{bankDataFromStore.ifscCode}</td>
                            

                            </tr>
                        </tbody>
                    </table>
            </div>
            
            <p>--------------------</p>
            <br></br>
            <div className="container">

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Remove Bank Account</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteBankById}>
                    <input className="form-control mt-4" type="number" id="accno" name="accno" value={accno} onChange={handleBank} placeholder="Enter accno to Delete" />
                    <input className="form-control mt-4 btn btn-danger" type="submit" value="Remove Bank" />
                </form>
               
            
            </div>
            <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Bank Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>
<p>-----------------------------------------------------------------------------------------------------</p>
           <div className="container">
            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Add Bank Account</p>
                <form className="form form-group form-primary" onSubmit={setNewBankObj}>
                    <input className="form-control mt-3" type="text" id="accno" name="accno" value={newBankObj.accno} onChange={handleAddBank} placeholder="Enter accno to" />
                    <input className="form-control mt-3" type="text" id="bankName" name="bankName" value={newBankObj.bankName} onChange={handleAddBank} placeholder="Enter bankName to " />
                    <input className="form-control mt-3" type="text" id="branch" name="branch" value={newBankObj.branch} onChange={handleAddBank} placeholder="Enter branch to "/>
                    <input className="form-control mt-3" type="text" id="accHolderName" name="accHolderName" value={newBankObj.accHolderName} onChange={handleAddBank} placeholder="Enter accHolderName to" />
                    <input className="form-control mt-3" type="text" id="ifscCode" name="ifscCode" value={newBankObj.ifscCode} onChange={handleAddBank} placeholder="Enter ifsccodeto " />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Add Bank" />
                </form>
                <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>Accno </th>
                                <th>BankName</th>
                                <th>Branch</th>
                                <th>AccoundHolderName</th>
                                <th>ifcsCode</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{bankDataFromStore.accno}</td>
                                <td>{bankDataFromStore.bankName}</td>
                                <td>{bankDataFromStore.branch}</td>
                                <td>{bankDataFromStore.accHolderName}</td>
                                <td>{bankDataFromStore.ifscCode}</td>
                            

                            </tr>
                        </tbody>
                    </table>
            </div>
            

            {/* <p>---------------------------------</p>
            <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Bank Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Add Bank Account</p>
                <form className="form form-group form-primary" onSubmit={addbankdetails}>
                    <input className="form-control mt-3" type="number" id="accno" name="accno" value={accno} onChange={handleAddBank} placeholder="Enter accno to search" />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Bank" />
                </form>
                <p>Data from store: {bankDataFromStore.accno} {bankDataFromStore.BankName} {bankDataFromStore.branch}{bankDataFromStore.ifscCode}{bankDataFromStore.AccHolderName}</p>
            </div> */}
        </div>
        </div>
    //</div></div>
    );
}
export default BankData;



