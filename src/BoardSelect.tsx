import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { IContent } from './content'
import Styles from './BoardSelect.module.css'
import { useDispatch } from 'react-redux'
import { action } from './modules/content'
import { parseContent } from './content/utils'

type BoardSelectProps = {}

const BoardSelect: React.FC<BoardSelectProps> = () => {
  const dispatch = useDispatch()
  const [boards, setBoards] = useState<IContent[]>(null!)
  useEffect(() => {
    import('./content')
      .then(allContent => {
        setBoards(allContent.default)
      })
      .catch(err => {
        /* Handle failure */
      })
  }, [setBoards])
  const selectBoard = (board: IContent) =>
    dispatch(action.setContent(parseContent(board)))
  return (
    <div className={Styles.BoardSelect}>
      <div>Select a Board!</div>
      {boards && boards.length ? (
        <ul>
          {boards.map(board => (
            <li key={board.id} onClick={() => selectBoard(board)}>
              {board.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry no Content!</p>
      )}
    </div>
  )
}

export default BoardSelect
