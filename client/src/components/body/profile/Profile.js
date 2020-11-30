import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
//import {Link} from 'react-router-dom'
import {isLength, isMatch} from '../../utils/validation/Validation'
import {showSuccessMsg, showErrMsg} from '../../utils/notification/Notification'
import {fetchAllUsers, dispatchGetAllUsers} from '../../../redux/actions/usersAction'

const initialState = {
    name: '',
    password: '',
    cf_password: '',
    company:'',
    phoneno:'',
    err: '',
    success: ''
}

function Profile() {
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

    const users = useSelector(state => state.users)

    const {user, isAdmin} = auth
    const [data, setData] = useState(initialState)
    const {name, password, cf_password, company, phoneno, err, success} = data

    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [callback, setCallback] = useState(false)

    const dispatch = useDispatch()
    console.log(users);
    useEffect(() => {
        if(isAdmin){
            fetchAllUsers(token).then(res =>{
                dispatch(dispatchGetAllUsers(res))
            })
            console.log(setCallback);
        }
    },[token, isAdmin, dispatch, callback])

    const handleChange = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err:'', success: ''})
    }

    const changeAvatar = async(e) => {
        e.preventDefault()
        try {
            const file = e.target.files[0]

            if(!file) return setData({...data, err: "No files were uploaded." , success: ''})

            if(file.size > 1024 * 1024)
                return setData({...data, err: "Size too large." , success: ''})

            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
                return setData({...data, err: "File format is incorrect." , success: ''})

            let formData =  new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload_avatar', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })

            setLoading(false)
            setAvatar(res.data.url)
            
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const updateInfor = () => {
        try {
            axios.patch('/user/update', {
                name: name ? name : user.name,
                avatar: avatar ? avatar : user.avatar
            },{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const updatePassword = () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})

        try {
            axios.post('/user/reset', {password},{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const handleUpdate = () => {
        if(name || avatar) updateInfor()
        if(password) updatePassword()
    }
    return (
        <>
        <h2 style={{textAlign:'center'}}>Hello user, update your Profile</h2> 
            <br/>
        <div className="main">   
        <div className="profile_page">
        <div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            {loading && <h3>Loading.....</h3>}
        </div>
         <div className="avatar">
                    <img src={avatar ? avatar : user.avatar} alt=""/>
                    <span>
                        <i className="fas fa-camera"></i>
                        <p>Change</p>
                        <input className="input" type="file" name="file" id="file_up" onChange={changeAvatar} />
                    </span>
                </div>
                <br />
            <div className="col-left">
               {/* <h2 style={{color:'#3D4F58'}}>{isAdmin ? "Admin Profile": "Update your Profile"}</h2> */}
                <div className="form-group">
                    <label htmlFor="name">First Name</label>
                    <input style={{marginLeft:'20px'}} className="input" type="text" name="name" id="name" defaultValue={user.name}
                    placeholder="Your name" onChange={handleChange} />
                    <label htmlFor="name">Last Name</label>
                    <input style={{marginLeft:'40px'}} className="input" type="text" name="name" id="name" defaultValue={user.name}
                    placeholder="Your name" onChange={handleChange} />
                    </div>
                <div className="form-group">
                    <label htmlFor="email" className="right">Email</label>
                    <input style={{flexGrow:'6',marginLeft:'43px',marginBottom:'16px'}}  className="input" type="email" name="email" id="email" defaultValue={user.email}
                    placeholder="Your email address" disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input style={{marginLeft:'-8px'}} className="input" type="password" name="password" id="password"
                    placeholder="Your password" value={password} onChange={handleChange} />
                  <label htmlFor="cf_password" className="right">Confirm New Password</label>
                    <input style={{marginLeft:'-50px'}} className="input" type="password" name="cf_password" id="cf_password"
                    placeholder="Confirm password" value={cf_password} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input style={{marginLeft:'7px'}} className="input" type="company" placeholder="Enter your Company" id="company"
                    value={company} name="company" onChange={handleChange} />
                   <label htmlFor="phoneno">Phone Number</label>
                    <input className="input" type="phoneno" placeholder="Enter your Phone number" id="phoneno"
                    value={phoneno} name="phoneno" onChange={handleChange} />
                </div>

                <button className="btn bob-on-hover" disabled={loading} onClick={handleUpdate}>Update</button>
            </div>
            </div>
            <div className="align-right">
            </div>
        </div>
        </>
    )
}

export default Profile
