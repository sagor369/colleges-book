import {useState, useEffect} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Title from '../../../Shared/PageTitle/Title';


const Header = () => {

    const [image , setImage] = useState([])
    useEffect(()=>{
        fetch('/image.json')
        .then(res => res.json())
        .then(data => setImage(data))
    }, [])
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className="">
            <Title title={'image gallery'}></Title>

            <AutoplaySlider infinite={true}  play={true} interval={6000} >
                {
                    image.map((data, index) => <div className="flex gap-4"
                    key={index}
                    >
                        <img className="w-full " src={data.image} alt="" />
                        <img className="w-full " src={data.name} alt="" />
                        
                    </div>)
                }
            </AutoplaySlider>
        </div>
    );
};

export default Header;