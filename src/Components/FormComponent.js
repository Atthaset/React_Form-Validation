import { useState } from 'react'
import './FormComponent.css'

const FormComponent = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const [errorUserName, setErrorUserName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorRepassword, setErrorRepassword] = useState('')

    const validateForm = (e) => {
        e.preventDefault()

        if (userName.length >= 8) {
            setErrorUserName('')
        }
        else{
            setErrorUserName('ป้อนชื่อผู้ใช้ตั้งแต่ 8 ตัวอักษร')
        }

        if(email.includes("@")){
            setErrorEmail('')
        }
        else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
        }

    }

    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <small>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>E-mail</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <small>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm password</label>
                    <input type="text" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
                    <small>{errorRepassword}</small>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormComponent