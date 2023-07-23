import {useState, useEffect} from 'react';
import Title from '../../../../Shared/PageTitle/Title';
import College from '../../College/College';

const Colloges = () => {
    const [Collegs, setColleges ] = useState([])
    useEffect(()=>{
        fetch('/college.json')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])
    return (
        <div>
            <Title title={'Colleges Details'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    Collegs.map((data, index)=> <College data={data
                    } key={index}></College>)
                }
            </div>
        </div>
    );
};

export default Colloges;