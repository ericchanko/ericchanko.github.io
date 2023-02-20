import { AnimateSharedLayout, motion } from "framer-motion";
import styles from '@/styles/Home.module.css'
import * as React from "react";


const Popup = () => {
    return (
        <div className={styles.featuredExpanded}>

        </div>
    )
}


const FeaturedCard = ({ toggle }) =>{
    return (
        <button
            className={styles.featured}
            onClick={Popup}
        >

        </button>
    )
}

export default FeaturedCard