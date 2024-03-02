
import Image from "next/image";
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
const SingleProduct = () => {
  return (
   
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          {/* <Image src={user.img || "/noavatar.png"} alt="" fill /> */}
          <Image src="/noavatar.png" alt="" fill />

        </div>
        {/* // {user.username} */}
        Iphone
       </div>
       <div className={styles.formContainer}>
         <form action="" className={styles.form}>
           {/* <input type="hidden" name="id" value={user.id}/> */}
           <label>Title</label>
           <input type="text" name="title" placeholder="title" />
           <label>Price</label>
           <input type="number" name="price" placeholder="price" />
           <label>Stock</label>
           <input type="number" name="stock" placeholder="1234" />
           <label>Color</label>
           <input type="text" name="color" placeholder="1234" />
           <label>Size</label>
           <input type="number" name="size" placeholder="1234" />
           <label>Description</label>
           <textarea type="text" name="address" placeholder="Osaka" />
           <label>Cat</label>
           <select name="cat" id="cat">
             <option value="kitchen" >Kitchen</option>
             <option value="computers">Computers</option>
           </select>
           <label>Description</label>
           <textarea type="text" name="address" rows={10} placeholder="Osaka" />

           <button>Update</button>
         </form>
       </div>
     </div>
  )
}

export default SingleProduct