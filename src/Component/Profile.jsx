import React from 'react'
import logo from  './personalinfo/elchini.jpg'
import Email from './Email'
import Name from './personalinfo/Name'
import Age from './personalinfo/yas'
import Address from './personalinfo/Address'
import PersonalInfo from './PersonalInfo'

import './Profile.css'
function Profile() {
  return (
    <div class="big">
        <h1>CV</h1>
        <Name/>
        <Age/>
        <Email/>
        <Address/>
        <PersonalInfo/>
    </div>
  )
}

export default Profile