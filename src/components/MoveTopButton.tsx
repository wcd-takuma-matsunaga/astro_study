import type React from 'react'

const MoveTopButton = (): React.JSX.Element => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button type="button" onClick={handleClick}>
      Go Page Top（react component）
    </button>
  )
}

export default MoveTopButton
