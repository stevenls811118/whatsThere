import { Inter } from 'next/font/google'

import Nav from '../components/Nav/Nav'
import VideoPlayer from '../components/Welcome/videoPlayer'
import DatePicker from '../components/Date-Picker/Date-Picker'
import PageFooter from '../components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <Nav />
      <div>
        <div className="flex justify-center py-4">
          <h1 className="text-6xl">
            WhatsThere?
          </h1>
        </div>
        <div className="flex justify-center w=70vw">
            The perfect travel companion & travel planning app that allows users to plan their trips by searching for attractions and events in a specific location. Users can also create a trip itinerary and save it to their account.
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          {/* <DatePicker /> */}
        </div>
        <div>
          <VideoPlayer />
        </div>
      </main>
      <PageFooter />
    </div>
  )
}