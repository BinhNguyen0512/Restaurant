import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../styles/Navbar.module.css"


const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={'/img/telephone.png'} alt="telephone" width={"32"} height={"32"}/>
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>0981376700</div>
        </div>



      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src={"/img/logo.png"} alt="logo" width="160" height="69" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>

        </ul>
      </div>
      <Link href='/cart'>
       <div className={styles.item}>
          <div className={styles.cart}>
            <Image src={"/img/cart.png"} alt="" width="30" height="30"/>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
     

    </div>
  )
}

export default Navbar