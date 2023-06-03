import './Background.css'
import bg from './bg_pokemon.mp4'


export default function Background() {
    return (
        <section className = "bg">
            <video
                width = '100vw'
                height = '100vh'
                src = { bg }
                loop
                autoPlay
            >
            </video>
        </section>
    )
};