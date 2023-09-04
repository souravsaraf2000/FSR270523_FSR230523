import YoutubeCard from "../YoutubeCard/YoutubeCard";
import styles from './YoutubeApp.module.css'

const YoutubeApp = (props) => {
    const {data} = props
    return <div className={styles.container}>
        {
            data.map(video => <YoutubeCard videoData={video}/>)
        }
    </div>
}

export default YoutubeApp;