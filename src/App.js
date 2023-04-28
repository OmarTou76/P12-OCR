import { useEffect, useState } from "react";
import { useFetch } from "./utils/useFetch";
import { User } from "./models/User";
import { Performance } from "./models/Performance";
import { Activity } from "./models/Activity";
import { AverageSessions } from "./models/AverageSessions";
import { Homepage } from "./pages/Homepage/Index";

function App() {
  /* 
    const [user, setUser] = useState({})
    const [performance, setPerformance] = useState({})
    const [activity, setActivity] = useState({})
    const [average, setAaverage] = useState({})
    const [userData, userLoading, userError] = useFetch(18)
    const [perfData, perfLoading, perfError] = useFetch(18, "performance")
    const [activityData, activityLoading, activityError] = useFetch(18, "activity")
    const [averageData, averageLoading, averageError] = useFetch(18, "average-sessions")
  
    useEffect(() => {
      if (userData && !userError && !userLoading) setUser(new User(userData.data))
      if (perfData && !perfError && !perfLoading) setPerformance(new Performance(perfData))
      if (activityData && !activityError && !activityLoading) setActivity(new Activity(activityData.data))
      if (averageData && !averageError && !averageLoading) setAaverage(new AverageSessions(averageData.data))
    }, [userData, userError, userLoading, perfData, perfError, perfLoading, activityData, activityError, activityLoading, averageError, averageData, averageLoading]) */

  return (
    <>
      <Homepage />
    </>
  );
}

export default App;

{/* <div style={{
      height: "100vh",
      width: "100vw",
      background: "black",
      color: "white"
    }}>
      {userLoading ? <p>Loading</p> : (
        <>
          <p>{JSON.stringify(user)}</p>
          <p>{JSON.stringify(performance)}</p>
          <p>{JSON.stringify(activity)}</p>
          <p>{JSON.stringify(average)}</p>
        </>
      )}
    </div> */}