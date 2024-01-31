import React from 'react'
import { useUserLocal } from '../../hooks/useUserLocal';

export const RolesViewModel = () => {

  const {user} = useUserLocal();

  return{
    user
  }
}

export default RolesViewModel;