"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { incDecRed, messageRed } from './reducer'

const inter = Inter({ subsets: ['latin'] })

const rootReducer = combineReducers({
  inc : incDecRed,
  msg: messageRed
})
const store = configureStore({
  reducer: rootReducer
})

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
