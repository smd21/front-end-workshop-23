//fix up table to look pretty lol
import { useEffect, useState } from "react"
export default function Table() {
  const url = "https://historical-dash.herokuapp.com/get-all-members"
  const [members, setMembers] = useState([])

  const fetchMembers = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setMembers(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchMembers();
  }, [])

  return (
    <div>
      <div className="table">
        <div className="table-head">
          <p className="table-item">Name</p>
          <p className="table-item"> Subteam</p>
          <p className="table-item">Year</p>
        </div>
        <div className="table-rows">
          {members.map((member) => {
            return (
              <div className="table-row">
                <p className="table-item">{member.name}</p>
                <p className="table-item">{member.subteam}</p>
                <p className="table-item">{member.year}</p>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}