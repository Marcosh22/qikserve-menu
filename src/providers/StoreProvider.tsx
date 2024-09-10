'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { Restaurant } from '@/@types/restaurantTypes'
import { Menu } from '@/@types/menuTypes'
import { initializeRestaurant } from '@/redux/slices/restaurantSlice'
import { initializeMenu } from '@/redux/slices/menuSlice'
import { AppStore, makeStore } from '@/redux/store'

interface StoreProps {
  children: React.ReactNode
  restaurant: Restaurant
  menu?: Menu | null
}

export default function StoreProvider({ children, restaurant, menu }: StoreProps) {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(initializeRestaurant(restaurant));
    if(menu) storeRef.current.dispatch(initializeMenu(menu));
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}