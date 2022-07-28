
import '../index.css';
console.log("WHY    DENY")

export default function Form(props){
    const {values, update, submit} = props

    const onChange = (event) => {
        const { name, value } = event.target;
        console.log({name,value})
        update(name, value);

    }

    const onSubmit=evt=>{
        evt.preventDefault();
        submit();

    }


    return(

        <form onSubmit={onSubmit}>
            <div>
            <label> Name:
            <input
                name="name"
                type="text"
                placeholder="Enter full name."
                value={values.name}
                onChange={onChange}
                maxLength="120"
            />
            </label>
            <br/>
            <label>Email:
                <input 
                name="email"
                type="email"
                placeholder="Enter email address."
                value={values.email}
                onChange={onChange}
                />
            </label>
            <label>Role:
                <select value={values.role} name="role" onChange={onChange}>
                    <option value="">--Select a Role--</option>
                    <option value="student">Student Developer</option>
                    <option value="junior">Junior Developer</option>
                    <option value="senior">Senior Developer</option>
                </select>
            </label>
            <div className="submit">
                <button disabled={!values.name || !values.role || !values.email}>SUBMIT</button>
            </div>
            </div>
        </form>
    )

}