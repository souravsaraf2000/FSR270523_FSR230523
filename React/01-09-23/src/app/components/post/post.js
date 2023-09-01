import styles from './post.module.css'


const Post = (props) => {
    let {postData} = props

    return <div className={styles.container}>
        <h1 className={styles.postHeading}>{postData.title}</h1>
        <p className={styles.postContent}>{postData.body}</p>
    </div>
}

export default Post