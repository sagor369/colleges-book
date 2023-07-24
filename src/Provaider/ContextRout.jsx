import {useContext} from 'react';
import { AuthContext } from './AuthProvaider';
import { Navigate, useLocation } from 'react-router-dom';

const ContextRout = ({children}) => {
    const {user, loading } = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    else return  <Navigate state={{from:location}} to='/login'></Navigate>
};

export default ContextRout;