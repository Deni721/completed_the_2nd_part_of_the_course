
export default function Button({handleFormClick,text}) {
  return (
    <div>
        <button type='submit' onClick={handleFormClick}>{text}</button>
    </div>
  )
}
