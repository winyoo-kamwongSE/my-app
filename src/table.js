import React, { Component } from 'react'
import Axios from 'axios'
import Example from './modaladdnews';
import ButtonLogin from './modallogin';
import {Button} from 'react-bootstrap';



export default class Content extends Component {
    constructor(props){
        super(props)
        this.state = {test : [],persons: [],movie :[],row2 :[] }
    }
    componentDidMount() {
        Axios.post('http://localhost:3000/alluser')
          .then(res => {
            console.log(JSON.stringify(res.data))
            const test = res.data.data;
            this.setState({ test });
          })
      }
    render() {
        return (
            <div>   
            <div class="row justify-content-md-center">
                <div class="col col-lg-2">
                <h2>News</h2>
                </div>
                <div class="col-md-3">
                
                </div>
                <div class="col col-lg-2">
                <ButtonLogin></ButtonLogin>
                </div>
            </div>
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">
                    <Example></Example>  
                    </div>
                    <div class="col-md-3">
                    
                    </div>
                    <div class="col col-lg-2">
                   
                    </div>
                </div>
                <div className="container" style={{marginTop:'30px'}}>
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="card" style={{padding:'30px'}}>
                                <table className="table table-striped" >
                                    <thead>
                                        <tr>
                                            <th style={{textAlign:"center"}}>Date</th>
                                            <th style={{textAlign:"center"}}>Type</th>
                                            <th style={{textAlign:"center"}}>Title</th>
                                            <th style={{textAlign:"center"}}>Action</th>
                                        </tr>
                                    </thead>
                                        {this.state.test.map(item=>(
                                            <tbody>
                                                <td style={{textAlign:"center"}}>{item.n_date.split(" - ").map(date => new Intl.DateTimeFormat('en-US')
                                                    .format(new Date(date)))
                                                    .join(" - ")}
                                                </td>
                                                <td style={{textAlign:"center"}}>{item.n_type}</td>                                               
                                                <td style={{textAlign:"center"}}>{item.n_title}</td>
                                                <td style={{textAlign:"center"}}> <Button variant="outline-warning"> Edit </Button>{' '}<Button variant="outline-danger">Delete</Button></td>
                                            </tbody>
                                        ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// export default Content;