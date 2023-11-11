import { useEffect, useState } from "react";

//contains a search bar, insert button -> form -> submit request
export default function Tools() {
  const url = "https://historical-dash.herokuapp.com/get-all-members"
  const [displayMem, setDisplayMem] = useState(false)
  const [memData, setMemData] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [member, setMember] = useState("")


  const getMembers = async (student) => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setMemData(data)
    } catch (error) {
      console.log(error)
    }
  }
  const getInput = (input) => {
    var lc = input.target.value.toLowerCase()
    setSearchInput(lc)
  }
  const handleSearch = () => {
    getMembers()
    const mem = memData.filter((member) =>
      member.name.toLowerCase() == searchInput
    )
    if (mem.length > 0) {
      setMember(mem[0])
      setDisplayMem(true)
    } else {
      setMember("name: none")
    }

  }
  const memDisplay = () => {
    if (displayMem == true) {
      return (
        <div>
          <p>{member.name}</p>
          <p>{member.fun_fact}</p>
        </div>
      )
    } else {
      return (
        <p>No one of that name T.T</p>
      )
    }
  }
  return (
    <div>
      <input type="text" onChange={getInput}></input>
      <button onClick={handleSearch}>Search</button>
      <div>
        <p>Name: {member.name}</p>
        <p>Fact: {member.fun_fact}</p>
        <p>Year: {member.year}</p>
      </div>
    </div>
  )
}