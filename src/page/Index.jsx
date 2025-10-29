import { useState } from 'react'
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Sobre } from '../components/Sobre';
export const Index = () => {
  return(
    <div className='m-0'>
      <Header/>
      <Main/>
      <Sobre/>
      <Sobre/>
      <Sobre/>
    </div>
  )
}