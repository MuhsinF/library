import { useEffect, useState } from 'react'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'
import DashboardLayout from '../../components/layout/dashboard-layout'
import BookList from '../../components/book-list'

const GET_USER_BOOKS = gql`
  query userBooks($collection: Collection!) {
    userBooks(collection: $collection) {
      bookId
      userId
      title
      author
      date
      rating
      collection
    }
  }
`
export default function Read () {
 const [userBooks, setUserBooks] = useState([])

 const {data} = useQuery(GET_USER_BOOKS, {variables: {collection: 'READ'}})

 useEffect(() => {
  setUserBooks(data?.userBooks)
 }, [data])

 return (
  <div className="flex flex-row flex-wrap justify-center -mx-3">
   <BookList data={userBooks} collectionType={'Read'} />
  </div>
 )
}

Read.getLayout = function getLayout (page) {
 return (
  <DashboardLayout>
   {page}
  </DashboardLayout>
 )
}
