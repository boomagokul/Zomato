import React from "react";

class Zomato extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
            food:{
                id:'AA101',
                name:'Biryani',
                img:'https://static.toiimg.com/thumb/54308405.cms?',
                qty:1,
                price:250
            }
            
        }
    }

    render()
    {
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-warning">Zomato:-</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt recusandae vero doloremque provident enim perspiciatis nesciunt? Corporis accusantium sunt accusamus odit ad, ipsam eaque, ducimus maiores architecto doloremque, quae ex.</p>
                            <button className="btn btn-warning">Order Now</button>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-5">
                            <table className="table table-striped">
                                <thead className="bg-warning text-white text-center">
                                    <tr>
                                        <th>S.NO</th>
                                        <th>IMAGE</th>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>QTY</th>
                                        <th>TOTAL PRICE</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <td>{this.state.food.id}</td>
                                        <td><img src={this.state.food.img}></img></td>
                                        <td>{this.state.food.name}</td>
                                        <td>{this.state.food.price}</td>

                                        <td>
                                        <button className="me-2" onClick={()=>{
                                       let cc=this.state.count-1;
                                       this.setState(
                                        {
                                           count:cc
                                        }
                                         );
                                 
                                        }}> - </button>{this.state.count}
                                            <button className="ms-2" onClick={()=>{
                                         let cc=this.state.count+1;
                                         this.setState(
                                        {
                                        count:cc
                                        }
                                        );
                                 
                                        }}>+</button></td>
                                        
                                        <td>{this.state.count*this.state.food.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Zomato;