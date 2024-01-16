import { Fragment, FC } from 'react';
import Link from 'next/link';
import ReactStars from 'react-rating-stars-component';
import { gql, useMutation } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';

const ModifyBookMutation = gql`
  mutation modifyBook($bookId: ID!, $title: String!, $author: String!, $file: File, $date: String!, $collection: Collection, $rating: Int) {
    modifyBook(
      bookId: $bookId
      title: $title
      author: $author
      file: $file
      date: $date
      collection: $collection
      rating: $rating
    ) {
      bookId
      userId
      title
      date
      rating
      collection
      rating
    }
  }
`

interface Book {
  bookId: string;
  title: string;
  author: string;
  date: string;
  collection: { value: string };
  rating: number;
}

interface BookListProps {
  data: Book[];
  collectionType?: string;
}

const BookList: FC<BookListProps> = ({ data, collectionType = '' }) => {
  const [modifyBook, { loading, error }] = useMutation(ModifyBookMutation, {});

  const ratingChanged = (newRating: number, book: Book) => {
    const { bookId, title, author, date, collection } = book;
    const variables = { bookId, title, author, date, collection: collection.value, rating: newRating };

    try {
      toast.promise(modifyBook({ variables }), {
        loading: 'Modifying book..',
        success: 'Book successfully modified!🎉',
        error: `Something went wrong 😥 Please try again -  ${error}`,
      })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Fragment>
      <Toaster />
      {data?.length > 0 && data?.map((book) => (
        <div key={book.bookId} className="flex-shrink w-full max-w-full px-3 pt-3 pb-3 border-b-2 border-gray-100 border-dotted sm:w-1/3 lg:w-1/4 sm:pt-0 sm:border-b-0">
          <div className="flex flex-row sm:block hover-img">
            <div className="py-0 pl-3 sm:py-3 sm:pl-0">
              <h3 className="mb-2 text-lg font-bold leading-tight">
                <Link href={`/book/edit/${book.bookId}`}>{book.title}</Link>
              </h3>
              <p className="hidden mb-1 leading-tight text-gray-600 md:block">{book.author} <span className="hidden mb-1 leading-tight text-gray-400 md:inline-block">, {book.date} </span></p>
              <span className="inline-block h-3 mr-2 text-gray-500 border-l-2 border-red-600"></span>{collectionType}
              <ReactStars
                count={5}
                value={book.rating}
                size={24}
                activeColor="#ffd700"
                onChange={(rating) => {
                  ratingChanged(rating, book)
                }}
              />
            </div>
          </div>
          </div>
        ))}
        </Fragment>
)
}

export default BookList;