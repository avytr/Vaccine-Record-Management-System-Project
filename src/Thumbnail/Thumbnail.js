import './Thumbnail.css';
import thumbnail from '../Thumbnail.png';
import Content from '../Content/Content';

function Thumbnail() {
    return (
        

        <div className='Thumbnail'>
            <img src={thumbnail}>
            </img>

            <div id='slogan'>
                <h1>
                    MASTERING MANAGEMENT,
                    MAXIMIZING RESULTS
                </h1>
                <div id='desc'>is about achieving a high level of managerial expertise to drive exceptional outcomes. It underscores the importance of leadership and effective management in reaching and surpassing goals, ultimately leading to a more successful and competitive organization.</div>

                <button>More</button>
            </div>

            <Content/>
        </div>
    )
}

export default Thumbnail;