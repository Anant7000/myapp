import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import app from './firebase'
import { getDatabase, ref, get, set } from "firebase/database";




let db = getDatabase(app)


export default function index() {

  const [obj, setobj] = useState({})

  const handleForm = () => {
    get(ref(db, `userData`)).then((e) => {
      // console.log(e.val())
      let arr = e.val()
      if (arr === null) {
        set(ref(db, `userData`), [obj])
      } else {
        arr.push(obj)
        set(ref(db, `userData`), arr)
      }
    })
  }



  return (
    <View>
      <Text style={{ fontSize: 100 }}>index</Text>
      <TextInput onChangeText={(e) => {
        setobj({ ...obj, ...{ name: e } })
      }} placeholder='name' />

      <TextInput onChangeText={(e) => {
        setobj({ ...obj, ...{ email: e } })
      }} placeholder='email' />


      <TextInput onChangeText={(e) => {
        setobj({ ...obj, ...{ phone: e } })
      }} placeholder='phone' />

      <View>
        <TouchableOpacity onPress={() => {
          handleForm()
        }}>
          <Text>Submit</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({})