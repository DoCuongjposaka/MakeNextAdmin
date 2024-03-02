import React from 'react'
import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='title' name='title' required />
        <input type="email" placeholder='email' name='email' required />
        <input type="password" placeholder='password' name='password' required />
        <input type="phone" placeholder='phone' name='phone'  />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>IsAdmin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>IsActive</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>        
        <textarea name="address" id="address" cols="30" rows="10" placeholder='Address'></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage