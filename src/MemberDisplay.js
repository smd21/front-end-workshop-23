//displays information about one member. 
//only visible after search bar used (displays Not Found if member not found)
export default function MemberDisplay(member) {
  return (
    <div className="display">
      <p>{member.name}</p>
      <p>{member.subteam}</p>
      <p>{member.year}</p>
    </div>
  )
}