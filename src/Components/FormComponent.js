import './FormComponent.css'

const FormComponent = () => {
    return (
        <div className="container">
            <form className="from">
                <div className="form-control">
                    <label>E-mail</label>
                    <input type="text"/>
                    <small>error messgae</small>
                </div>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text"/>
                    <small>error messgae</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="text"/>
                    <small>error messgae</small>
                </div>
                <div className="form-control">
                    <label>Confirm password</label>
                    <input type="text"/>
                    <small>error messgae</small>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormComponent