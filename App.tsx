import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <ElevatedCards />
        <FlatCards />
        <FancyCard />
        <FancyCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App