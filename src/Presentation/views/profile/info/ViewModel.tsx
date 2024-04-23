import React, {useContext} from 'react'
import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal'
import { UserContext } from '../../../context/UserContext';

const ProfileInfoViewModel = () => {

    const {user, removeUserSession} = useContext(UserContext); 

        return{
            removeUserSession,
            user
        }
}

export default ProfileInfoViewModel;
