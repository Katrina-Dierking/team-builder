import React, { useState } from "react";


const Form = props => {

    const [member, setMember] = useState ({
        name: "",
        role: "",
        email: ""
    })

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member
  
        }

        props.addNewMember(newMember);
        setMember({ name: "", role: "", email: ""})
    }

    return (

            <form onSubmit={submitForm}>

                <h1>Add a new team member below: </h1><br />


                <input 
                    type="text"
                    name="name"
                    placeholder = "name"
                    onChange={changeHandler}
                    value={member.name}
                    />

                <br /><br />

                <input 
                    type="text"
                    name="role"
                    placeholder = "role"
                    onChange={changeHandler}
                    value={member.role}
                    />
<br /><br />

                <input 
                    type="text"
                    name="email"
                    placeholder = "email"
                    onChange={changeHandler}
                    value={member.email}
                    />
                <br /><br />

                    <br />

                    <button type="submit">Add Team Member!</button>
         </form>
      )
}


export default Form; 