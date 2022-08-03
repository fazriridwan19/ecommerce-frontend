import './newUser.css'

export default function NewUser() {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder='jhon' />
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder='Jhon Smith' />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder='jhon@gmail.com' />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder='password' />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder='+1 234 567 891' />
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder='New York | USA' />
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name='gender' id='male' value={'male'} />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name='gender' id='female' value={'female'} />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name='actice' id='active'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}
