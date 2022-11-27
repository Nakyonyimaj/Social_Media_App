import React from 'react'

const validation = (values) =>{
    let errors ={};
    if(!values.firstname){
        errors.firstname = "Firstname is required"
    }
    if(!values.lastname){
        errors.lastname = "LastName is required"
    }
    if(!values.email){
        errors.email = "Email is reqiured"
    }else if(!new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(values.email)){
        errors.email = "Email is invalid"
    }
    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length<5){
        errors.password = "Password must be more than five chacters"
    }

    return errors
}

export default validation;