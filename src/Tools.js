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
  const display = () => {
    if (displayMem) {
      return (
        <div>
          <p>Name: {member.name}</p>
          <p>Fact: {member.fun_fact}</p>
          <p>Year: {member.year}</p>
        </div>
      )
    } else {
      return (
        <div>
          <p>This person does not exist</p>
        </div>
      )
    }

  }

  return (
    <div>
      <input type="text" onChange={getInput}></input>
      <button onClick={handleSearch}>Search</button>

      <div>{display()}</div>
    </div>
  )
}