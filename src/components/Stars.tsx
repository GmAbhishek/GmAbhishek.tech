import StaryNights from '../assets/'
import '../css/stars.css'
function Stars(): JSX.Element {
    
    return (
        <div className="background">
             <video className="video-background" autoPlay loop muted>
                <source src={StaryNights} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Stars
