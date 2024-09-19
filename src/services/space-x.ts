import { type ApiSpace, type Doc} from '../types/api'

export const getLaunchById = async ({id}: {id: string}) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json() as Doc;
  return launch;
  console.log({launch})
}

export const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      sort: {
        date_unix: "asc"
      },
      limit: 3
    })
  });
  const { docs: launches } = await res.json() as ApiSpace;
  return launches;
}

