import React from 'react'
import styles from './UserCard.module.css'

class UserCard extends React.Component {

    render() {
        const {userData} = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.imageDiv}>
                    <img src={userData.image} alt={`user${userData.id}`}/>
                </div>
                <div className={styles.contentDiv}>
                    <p className={styles.name}>{userData.firstName+' '+userData.lastName}</p>
                    <div className={styles.personalInfo}>
                        <p><b>Gender:</b> {userData.gender}</p>
                        <p><b>Age:</b> {userData.age}</p>
                    </div>
                    <div className={styles.contactInfo}>
                        <p><b>Email:</b> {userData.email}</p>
                        <p><b>Mobile:</b> {userData.phone}</p>
                    </div>
                    <div className={styles.address}>
                        <p><b>Address:</b> {userData.address.city}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserCard;