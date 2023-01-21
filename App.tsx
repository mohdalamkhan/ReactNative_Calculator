import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calcBox}>
      <Text style={styles.calcHeading}>Calculator</Text>
      </View>

      <View style={styles.displayCalcBox}>
        <TextInput keyboardType='numeric' maxLength={9}
        caretHidden={true}
        style={styles.inputStyle}>
          0
        </TextInput>
      </View>

      <View style={styles.calcKeysbox}>
        <TouchableOpacity style={styles.calcKeysGrey}>
          <Text style={styles.keysNumbers}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcKeysGrey}>
          <Text style={styles.keysNumbers}>+/-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcKeysGrey}>
          <Text style={styles.keysNumbers}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcKeysYellowOrange}>
          <Text style={styles.keysNumbers}>/</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.calcKeysbox}>
        <TouchableOpacity style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcKeysYellowOrange}>
          <Text style={styles.keysNumbers}>x</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.calcKeysbox}>
        <TouchableOpacity style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcKeysYellowOrange}>
          <Text style={styles.keysNumbers}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calcKeysbox}>
        <TouchableOpacity style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcKeysYellowOrange}>
          <Text style={styles.keysNumbers}>+</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.calcKeysbox}>
        <TouchableOpacity style={styles.zeroStyle}>
          <Text style={styles.zeroTextStyle}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcKeysYellowOrange}>
          <Text style={styles.keysNumbers}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor:'#000',
    alignItems: 'center',
  },
  calcHeading:{
    fontSize: wp('10%'),
    color:'#fff',
  },
  calcBox:{
   width: wp('100%'),
   height: hp('10%'),
   justifyContent:'center',
   alignItems:'center',
  },

  displayCalcBox:{
    width: wp('100%'),
    height: hp('15%'),
    flexDirection:'row-reverse',
  },
  inputStyle:{
    fontSize: wp('16%'),
    color: 'white',
    paddingRight: wp('11%'),
  },
  calcKeysbox:{
    width: wp('100%'),
    marginTop: hp('1%'),
    flexDirection:'row',
    justifyContent:'center',
  },

  calcKeysGrey:{
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    backgroundColor:'grey',
    margin: wp('2%'),
  },

  calcKeysYellowOrange:{
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    backgroundColor:'#F39C12',
    margin: wp('2%'),
  },

  calcNumKeys:{
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    backgroundColor:'#353030',
    margin: wp('2%'),
  },



  keysNumbers:{
    fontSize: wp('8%'),
    justifyContent:'center',
    textAlign: 'center',
    paddingVertical:wp('3.6%'),
    paddingHorizontal: wp('2%'),
    color: 'white',
  },

  zeroStyle:{
    width: wp('40%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    backgroundColor:'#353030',
    margin: wp('2%'),
  },
  zeroTextStyle:{
    fontSize: wp('8%'),
    color: 'white',
    justifyContent:'center',
    paddingVertical:wp('3.6%'),
    paddingHorizontal: wp('7%'),
  },
})

export default App
