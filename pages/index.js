import Head from 'next/head'
import { useState, useCallback } from 'react'

export default function Home() {
  const [todoList, setTodoList] = useState([{
    id: 1,
    title: 'drink coffee',
    done: true
  },{
    id: 2,
    title: 'drink curry',
    done: false
  },{
    id: 3,
    title: 'drink numa',
    done: false
  },{
    id: 4,
    title: 'drink protein',
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
          return <label style={{display: 'flex'}} key={todo.id} onChange={() => update(todo.id)}>
            <input type="checkbox" checked={todo.done} />
            {todo.title}
          </label>
        })}
      </main> 
    </div>
  )
}
