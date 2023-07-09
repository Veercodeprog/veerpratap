import React from 'react'

const Courses = () => {
  return (
   <div>
        <title>Catty Music</title>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <main className="flex-1 flex">
          <aside className="flex flex-col justify-around items-center flex-0 w-20 bg-red-200">
            <i className="fa fa-bars" />
            <i className="fa fa-home" />
            <i className="fa fa-search" />
            <i className="fa fa-volume-up" />
            <i className="fa fa-user" />
            <i className="fa fa-spotify" />
            <i className="fa fa-cog" />
            <i className="fa fa-soundcloud" />
          </aside>
          <section className="content flex-1 flex flex-col">
            <div className="music-head flex-0 flex items-center p-4 bg-gray-700">
              <img src="https://admission.aglasem.com/wp-content/uploads/2019/12/COURSES-1140x641.png" className='w-60 h-60' />
              <section className="catty-music flex-1 flex flex-col font-normal text-white pl-10">
                <div className="mb-auto">
                  <p className="text-2xl leading-none mb-2">Course title</p>
                  <p className="mb-2">subtitle</p>
                  <p className="mb-0">tags</p>
                </div>
                <div>
                  <i className="fa fa-play"> &nbsp;Play all</i> 
                  <i className="fa fa-plus"> &nbsp;Add to</i>
                  <i className="fa fa-ellipsis-h">&nbsp;&nbsp;More</i>
                </div>
              </section>
            </div>
            <ul className="music-list flex-1 list-none pt-5 px-10">
              <li className="flex items-center px-20 h-20">
                <p className="flex-0 w-1/4">1. One Dance</p>
                <p className="flex-0 w-1/4">Crake feat CatKid &amp; Cyla</p>
                <p className="flex-0 w-1/4">2:54</p>
                <p className="flex-0 w-1/4"><span className="catty-cloud border border-black text-xs p-1">CATTY CLOUD SYNC</span></p>
              </li>
              <li className="flex items-center px-20 bg-gray-200 h-20">
                <p className="flex-0 w-1/4">2. Panda</p>
                <p className="flex-0 w-1/4">Cattee</p>
                <p className="flex-0 w-1/4">4:06</p>
                <p className="flex-0 w-1/4"><span className="catty-cloud border border-black text-xs p-1">CATTY CLOUD SYNC</span></p>
              </li>
              <li className="flex items-center px-20 h-20">
                <p className="flex-0 w-1/4">3. Can't Stop the Feeling!</p>
                <p className="flex-0 w-1/4">Catin Cimberlake</p>
                <p className="flex-0 w-1/4">3:56</p>
                <p className="flex-0 w-1/4"><span className="catty-cloud border border-black text-xs p-1">CATTY CLOUD SYNC</span></p>
              </li>
              <li className="flex items-center px-20 bg-gray-200 h-20">
                <p className="flex-0 w-1/4">4. Work From Home</p>
                <p className="flex-0 w-1/4">Cat Harmony feat Colla</p>
                <p className="flex-0 w-1/4">3:34</p>
                <p className="flex-0 w-1/4"><span className="catty-cloud border border-black text-xs p-1">CATTY CLOUD SYNC</span></p>
              </li>
            </ul>
          </section>
        </main>
        <footer className="flex flex-row items-center justify-between bg-blue-700 text-white p-2">
          <div className="catty-music-small flex">
            <img src="http://i.imgur.com/xDSTaej.jpg" width="70px" className="pr-10" />
            <div>
              <p>If It Ain't Love</p>
              <p>Catson Derulo</p>
            </div>
          </div>
          <div className="catty-music-controls flex items-center">
            <i className="fa fa-step-backward" />
            <i className="fa fa-pause" />
            <i className="fa fa-step-forward" />
            <i className="fa fa-rotate-right" />
            <i className="fa fa-random" />
          </div>
        </footer>
      </div>
  )
}

export default Courses
