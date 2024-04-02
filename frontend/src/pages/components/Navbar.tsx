import React from 'react';
import styles from "@/styles/Navbar.module.css"
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <span className='bg-blue-500 py-1 px-2 text-white rounded-full mr-1'>T</span>
        TASK
      </div>

      <div className={styles.search}>
        <div><FiSearch /></div>
        <input type="text" placeholder='search anything' />
      </div>

      <div className={styles.navitems}>
        <ul>
          <li>
            <a href="#">Dashboard</a>
            <div className={styles['dropdown-menu']}>
              <a href="#">Profile</a>
              <a href="#">Logout</a>
              <a href="#">Security</a>
              <a href="#">Notification update</a>
              <a href="#">Language Prefrences</a>
            </div>
          </li>
          <li>
            <a href="#">Settings</a>
            <div className={styles['dropdown-menu']}>
              <a href="#">Contact Admin</a>
              <a href="#">FAQ</a>
              <a href="#">Feedback</a>
            </div>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;