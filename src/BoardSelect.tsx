import React, { useCallback } from 'react'
import uuid from 'uuid'
// import boards from './content'

// boards.forEach(board => ({ ...board, id: uuid() }))

type BoardSelectProps = {}

const BoardSelect: React.FC<BoardSelectProps> = props => {
  const handleClick = useCallback(e => {
    console.log('clicked!')
  }, [])
  const handleSubmit = useCallback(e => {
    e.preventDefault()
    // debugger
  }, [])
  return (
    <div>
      <div>Select a Board!</div>
      {/* {boards.length && (
        <form onSubmit={handleSubmit}>
          <ul>
            {boards.map(board => (
              <li key={board.id}>
                <button
                  type="submit"
                  value={board.id}
                  style={{ color: 'black' }}
                  onClick={handleClick}
                >
                  {board.name}
                </button>
              </li>
            ))}
          </ul>
        </form>
      )} */}
    </div>
  )
}

export default BoardSelect
