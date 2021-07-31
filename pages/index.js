import Head from 'next/head'
import { useState, useCallback } from 'react'

export default function Home() {
  const [todoList, setTodoList] = useState([{
    id: 1,
    title: 'drink coffee',
    done: false
  },{
    id: 2,
    title: 'drink coffee',
    done: false
  },{
    id: 3,
    title: 'drink coffee',
    done: false
  },{
    id: 4,
    title: 'drink coffee',
    done: false
  },])

  const update = useCallback((id) => {
    setTodoList(todoList => {
      return todoList.map(todo => {
        return todo.id === id ? {
          ...todo,
          done: !todo.done
        } : todo
      })
    })
  })



  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {todoList.map(todo => {
          return <label key={todo.id} onChange={() => update(todo.id)}>
            <input type="checkbox" checked={todo.done} />
            {todo.title}
          </label>
        })}
      </main> 
    </div>
  )
}
