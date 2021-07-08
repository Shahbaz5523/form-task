import './form.css';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {AiFillPlusCircle , AiFillMinusCircle , BiSave , BiSearch , TiDelete , TiTick, BiExit} from 'react-icons/all';

export default function Myform() {
    return (
        <div className="myform">
            <div className="header">
                <button style={{color:'green'}}><AiFillPlusCircle style={{verticalAlign:"top"}}/> New</button>
                <button><AiFillMinusCircle style={{verticalAlign:"top"}}/> Cancel</button>
                <button><BiSave style={{verticalAlign:"top"}}/> Save</button>
                <button style={{color:'green'}}><BiSearch style={{verticalAlign:"top"}}/> Query</button>
                <button><TiDelete style={{verticalAlign:"top"}}/> Delete</button>
                <button><TiTick style={{verticalAlign:"top"}}/> Approve</button>
                <button style={{color:'green'}}><BiExit style={{verticalAlign:"top"}}/> Exit</button>
            </div>
            <div className="basic">
                <div className="left">
                    <div className="form-control">
                        <label>Loan Dem and ID</label>
                        <div>
                            <input type="text" style={{width:"80px "}}/>
                            <span><BiSearch style={{fontSize:"1rem", fontWeight:"bold"}}/></span>
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Center</label>
                        <div>
                            <input type="text" style={{width:"80px "}}/>
                            <input type="text" />
                            <span><BiSearch style={{fontSize:"1rem", fontWeight:"bold"}}/></span>
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Loan Product</label>
                        <div>
                           <input type="text" style={{width:"80px "}}/>
                            <select style={{width:"100%"}}>
                                <option value="--SELECT--">--SELECT--</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Account No</label>
                        <div>
                            <input type="text" style={{width:"110px "}}/>
                            <input type="text" />
                            <span><BiSearch style={{fontSize:"1rem", fontWeight:"bold"}}/></span>
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Instruction</label>
                        <div>
                            <input type="text" style={{width:"100%"}} />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="form-control">
                        <label>Grounp</label>
                        <div>
                            <input type="text" style={{width:"110px "}}/>
                            <input type="text" />
                            <span><BiSearch style={{fontSize:"1rem", fontWeight:"bold"}}/></span>
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Customer</label>
                        <div>
                            <input type="text" style={{width:"110px "}}/>
                            <input type="text" />
                            <span><BiSearch style={{fontSize:"1rem", fontWeight:"bold"}}/></span>
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Currency</label>
                        <div>
                            <input type="number" value='01' style={{width:"50px"}}/>
                            <select>
                                <option value="NPR">NPR</option>
                            </select>
                            <lable>Is gurantor Required</lable>
                            <select>
                                <option value="NO">NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <button style={{padding:"5px 10px",backgroundColor:"gray",color:'white',borderColor:"#ccc",borderRadius:"5px"}}>View Customer Info</button>
                    </div>
                </div>
            </div>
            <div className="tabs">
                <Tabs>
                    <TabList>
                        <Tab>Basic Info</Tab>
                        <Tab>A/C Holder</Tab>
                        <Tab>A/C Operator</Tab>
                        <Tab>Extra Info</Tab>
                        <Tab>Catgory Coding</Tab>
                        <Tab>Attach Document</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="upperTab">
                            <div className="tab-control">
                                <div>
                                    <label>Period</label>
                                    <div>
                                        <input type="text" style={{width:"50px"}}/>
                                        <select><option value="Year">YEAR</option></select>
                                    </div>
                                </div>
                                <div>
                                    <label>Opening Date</label>
                                    <div>
                                        <input type="date" />
                                    </div>
                                </div>
                                <div>
                                    <label>Expiry Date</label>
                                    <div>
                                        <input type="date" />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-control">
                                <div>
                                    <label>Intrest Rate</label>
                                    <div>
                                        <input type="text" style={{width:"50px"}}/>
                                    </div>
                                </div>
                                <div>
                                    <label>Sechdule</label>
                                    <div>
                                        <select style={{width:"100%"}}><option value="NO">NO</option></select>
                                    </div>
                                </div>
                                <div>
                                    <label>Schdule Type</label>
                                    <div>
                                        <select style={{width:"100%"}}><option value="EP">EP</option></select>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-control">
                                <div>
                                    <label>Instalment Type</label>
                                    <div>
                                        <select style={{width:"100%"}}><option value="NONE">NONE</option></select>
                                    </div>
                                </div>
                                <div>
                                    <label>Intrest Payment Feq</label>
                                    <div>
                                        <select style={{width:"100%"}}><option value="--SELECT__">--SELECT__</option></select>
                                    </div>
                                </div>
                                <div>
                                    <label>Intrest Type</label>
                                    <div>
                                        <select style={{width:"100%"}}><option value="FLAT">FLAT</option></select>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="tab-control">
                                <div>
                                    <label>Grace For Intrest</label>
                                    <div>
                                        <input type="text" style={{width:"50px"}} />
                                        <label>Days</label>
                                    </div>
                                </div>
                                <div>
                                    <label>Loan Cycle No</label>
                                    <div>
                                        <input type="text" style={{width:"100%"}} />
                                    </div>
                                </div>
                                <div>
                                    <label>Purpose</label>
                                    <div>
                                        <input type="text" style={{width:"50px"}}/>
                                        <input type="text" style={{width:"80px"}}/>
                                        <span><BiSearch/></span>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="tab-control">
                                <div>
                                    <label>Grace Rebate</label>
                                    <div>
                                        <input type="text" style={{width:"50px"}} />
                                        <label>Days</label>
                                    </div>
                                </div>
                                <div>
                                    <label>IPF For Group Loan</label>
                                    <div>
                                        <input type="text" style={{width:"100%"}} />
                                    </div>
                                </div>
                                <div>
                                    <label>PPF For Group Loan</label>
                                    <div>
                                        <input type="text" style={{width:"50px"}}/>
                                        <label style={{fontSize:"xx-small"}}>Real Freq</label>
                                        <select style={{width:"70px"}}><option value="SELECT">SELECT</option></select>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="lowerT">

                        <div className="tab-control">
                            <div style={{width:"600px"}}>
                                <label>A/C Officer</label>
                                    <div style={{width:"450px"}}>
                                        <input type="text" style={{width:"100px"}} />
                                        <input type="text" style={{width:"280px"}} />
                                        <span><BiSearch/></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-control">
                            <div style={{width:"500px"}}>
                                <label>Principle A/C</label>
                                    <div style={{width:"350px"}}>
                                        <select style={{width:"100px"}}><option value="DEPOST A/C">DEPOST A/C</option></select>
                                        <input type="text" style={{width:"100px"}} />
                                        <input type="text" style={{width:"200px"}} />
                                        <span><BiSearch/></span>
                                    </div>
                            </div>
                        </div>

                        
                        <div className="tab-control">
                            <div style={{width:"500px"}}>
                                <label>Intrest A/C</label>
                                    <div style={{width:"350px"}}>
                                        <select style={{width:"100px"}}><option value="DEPOST A/C">DEPOST A/C</option></select>
                                        <input type="text" style={{width:"100px"}} />
                                        <input type="text" style={{width:"200px"}} />
                                        <span><BiSearch/></span>
                                    </div>
                            </div>
                        </div>

                        
                        <div className="tab-control">
                            <div style={{width:"600px"}}>
                                <label>Collector</label>
                                    <div style={{width:"450px"}}>
                                        <input type="text" style={{width:"100px"}} />
                                        <input type="text" style={{width:"280px"}} />
                                        <span><BiSearch/></span>
                                    </div>
                            </div>
                        </div>

                        

                        <div className="tab-control">
                            <div style={{width:"600px"}}>
                                <label>Aginst Depost</label>
                                    <div style={{width:"450px"}}>
                                        <select style={{width:"100px"}}><option value="NO">NO</option></select>
                                        <input type="text" style={{width:"100px"}} />
                                        <input type="text" style={{width:"180px"}} />
                                        <span><BiSearch/></span>
                                    </div>
                            </div>
                        </div>

                        
                        <div className="tab-control">
                            <div style={{width:"600px"}}>
                                <label>Guarantor</label>
                                    <div style={{width:"450px"}}>
                                        <input type="text" style={{width:"100px"}} />
                                        <input type="text" style={{width:"280px"}} />
                                        <span><BiSearch/></span>
                                    </div>
                            </div>
                        </div>

                    </TabPanel>
   
                </Tabs>
            </div>
        </div>
    )
}