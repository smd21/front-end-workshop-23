import { useEffect, useState } from "react";

//contains a search bar, insert button -> form -> submit request
export default function Tools() {
  const url = "https://historical-dash.herokuapp.com/get-all-members"
  const [displayMem, setDisplayMem] = useState(false)
  const [memNames, setMemNames] = useState([])
  const [searchInput, setSearchInput] = useState("")


  const getMembers = async (student) => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      const names = data.map((member) => {
        return (
          member.name.toLowerCase()
        )
      })
      setMemNames(names)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSearch = (input) => {
    var lowerCase = input.target.value.toLowerCase()
    setSearchInput(lowerCase)
  }
  useEffect(() => {
    getMembers()
  }, [])
  return (
    <div>
      <input type="text" onChange={handleSearch}></input>
      <p>{searchInput}</p>
    </div>
  )
}