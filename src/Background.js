import './Background.css'
import ReactPlayer from 'react-player'
// import bg from 'https://drive.google.com/uc?id=1Gz0AZP2OqF87T7W2l74YoIvea3BSiv8e'


export default function Background() {
    const video = document.getElementsByClassName('bg')

    console.log(video)


    return (
        <section className = "bg">
            <iframe 
                src="https://drive.google.com/file/d/1Gz0AZP2OqF87T7W2l74YoIvea3BSiv8e/preview" 
                width="640" 
                height="480" 
                allow="autoplay"
            ></iframe>
        </section>
    )
};