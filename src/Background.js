import './Background.css'
import bg from './bg_pokemon.mp4'


export default function Background() {
    const video = document.getElementsByClassName('bg')


    return (
        <section className = "bg">
            <video
                src={bg}
                height="100%" 
                width="100%" 
                autoPlay
                muted
                loop
                controls={false}
            ></video>
        </section>
    )
};