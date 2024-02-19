
"use client"

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

import styles from './navbar.module.css'
const Navbar =() => {
  const pathName = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName}

      </div>
    </div>
  )
}

export default Navbar