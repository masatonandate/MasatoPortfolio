import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import PDF from '../PDF/Nandate_Masato.Resume.pdf'


const Resume = () => {
  return (
    <div>
      <Header />
      <div className='flex items-center bg-white dark:bg-gray-900'>
        <iframe
          src = {PDF}
          className=" w-3/4 mx-auto aspect-square border-none inline-block"
          title="MasatoResume">
        </iframe>
      </div>
      <Footer />
    </div>
  )
}

export default Resume;