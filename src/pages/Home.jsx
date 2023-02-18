import React from 'react'
import { useState, useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('/api/workouts')
      const json = await res.json()

      if(res.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div>
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  )
}

export default Home