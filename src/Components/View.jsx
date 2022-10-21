import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getSecretFiles} from "../Redux/Actions/index";

export default function View() {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getSecretFiles())},[dispatch]);
    let FilesToView = useSelector((state) => state.files);

    return (
                <Table striped bordered hover>
                    <tbody >
                    {Array.isArray(FilesToView) && 
                    FilesToView.map((e)=> e.lines.map((item,index)=> 
                        <tr key ={index}>
                            <td>{e.file}</td>
                            <td>{item.text}</td>
                            <td>{item.number}</td>
                            <td>{item.hex}</td> 
                        </tr>
                        
                    ))}
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Text</th>
                            <th>Number</th>
                            <th>Hex</th>
                        </tr>
                    </thead>
                </Table>
    )
}