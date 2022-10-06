import React from 'react'
import { clients } from '../constants';
import styles, {layout} from '../style';
const Clients = () => {
    return (
        <section className={`${styles.flexCenter} my-4 `} >
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((clien)=> (
                    <div key={clien.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[190px] min-w-[120px] m-5`}>
                        <img src={clien.logo} className="sm:w-[190px] w-100px object-contain"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Clients
