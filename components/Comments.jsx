import React, { useState, useEffect} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments} from '../services'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug)
      .then((result) => setComments(result))
  })

  return (
    <>
      {comments.length > 0 && (
      <div className="bg-gray-900 shdaow-lg rounded-lg p-8 pb-12 mb-8 border-2 border-red-300">
      <h3 className="text-xl text-white mb-8 font-semibold border-b pb-4 border-red-200">
        {comments.length} Comments
        {' '}
      </h3>
      {comments.map((comment) => (
        <div className="border-b border-red-200 mb-4 pb-4 text-red-200" key={comment.createdAt}>
          <p className="mb-4">
            <span className="font-semibold ">{comment.name}</span>
            {' '}
            on
            {' '}
            {moment(comment.createdAt).format('MMM DD, YYYY')}
            <p className="whitespace-pre-line text-white w-full">{parse(comment.comment)}</p>
            </p>
        </div>
      ))}
      
    </div>
    )}
    </>
  
 
  )
}

export default Comments
