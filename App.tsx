
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {

const [resultText, setResultText] = useState("");
const [calcText, setCalcText] = useState("");

// for Button perform
const onButtonClick = (text) => {
if(text == "="){
  return calculateResult();
}
setResultText(resultText + text);
};


const calculateResult = () =>{
  setCalcText(eval(resultText));
};


const onOperationClick = (operation) => {
  let operations = ["DEL", "+", "-", "*", "/"];

  if(operation == "DEL"){
    return setResultText(
      resultText.toString().substring(0, resultText.length -1)
    );
  }

  if (operation == "AC"){
    setResultText("");
    setCalcText(0);
    return;
  }

  if(operations.includes(resultText.toString().split("").pop()))
  // {
    return;
    setResultText(resultText + operation);
  // }
  
};






  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calcBox}>
      <Text style={styles.calcHeading}>Calculator</Text>
      </View>

      {/* <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
      </View> */}
      <View style={styles.calculation}>
      <Text style={styles.resultText}>{calcText}</Text>
        <Text style={styles.calculationText}>{resultText}</Text>
      </View>

      {/* <View style={styles.displayCalcBox}> */}
        {/* <Text style={styles.calcTextStyle}>{calcText}</Text> */}
        {/* <TextInput keyboardType='numeric' maxLength={9}
        caretHidden={true}
        style={styles.calcTextStyle}>
          0
        </TextInput> */}
      {/* </View> */}

      <View style={styles.calcKeysbox}>
        <TouchableOpacity onPress={() => onOperationClick("AC")}
         style={styles.calcKeysGrey}>
          <Text style={styles.keysNumbers}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcKeysGrey}>
          <Text style={styles.keysNumbers}>+/-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calcKeysGrey}>
          <Text style={styles.keysNumbers}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onOperationClick("/")}
         style={styles.calcKeysYellowOrange}>
          <Text style={styles.keysNumbers}>/</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.calcKeysbox}>
        <TouchableOpacity  onPress={()=>onButtonClick(7)}
         style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>onButtonClick(8)}
        style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>onButtonClick(9)}
          style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onOperationClick("x")}
         style={styles.calcKeysYellowOrange}>
          <Text style={styles.keysNumbers}>x</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.calcKeysbox}>
        <TouchableOpacity onPress={()=>onButtonClick(4)}
          style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>onButtonClick(5)}
          style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>onButtonClick(6)}
           style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onOperationClick("-")}
        style={styles.calcKeysYellowOrange}>
          <Text style={styles.keysNumbers}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calcKeysbox}>
        <TouchableOpacity onPress={()=>onButtonClick(1)}
          style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>onButtonClick(2)}
          style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>onButtonClick(3)}
          style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onOperationClick("+")}
        style={styles.calcKeysYellowOrange}>
          <Text style={styles.keysNumbers}>+</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.calcKeysbox}>
        <TouchableOpacity onPress={()=>onButtonClick(0)}
          style={styles.zeroStyle}>
          <Text style={styles.zeroTextStyle}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>onButtonClick(".")}
          style={styles.calcNumKeys}>
          <Text style={styles.keysNumbers}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>onButtonClick("=")}
          style={styles.calcKeysYellowOrange}>
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

  // displayCalcBox:{
  //   width: wp('100%'),
  //   height: hp('15%'),
  //   flexDirection:'row-reverse',
  //   borderBottomColor:'#fff',
  // },
  // calcTextStyle:{
  //   fontSize: wp('16%'),
  //   color: 'white',
  //   paddingRight: wp('11%'),
  // },
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

  // result: {
  //   flex: 2,
  //   backgroundColor: "grey",
  //   justifyContent: "center",
  //   alignItems: "flex-end",
  // },
  resultText: {
    // fontSize: 30,
    // color: "white",
    fontSize: wp('14%'),
    color: 'white',
    paddingRight: wp('11%'),
  },
  calculationText: {
    // fontSize: 20,
    // color: "black",
    fontWeight: "bold",
    fontSize: wp('16%'),
    color: 'white',
    paddingRight: wp('11%'),
  
  },
  calculation: {
    // flex: 1,
    // backgroundColor: "#d6d6c2",
    backgroundColor:'#000',
    justifyContent: "center",
    alignItems: "flex-end",
    width: wp('100%'),
    height: hp('15%'),
  },


  // displayCalcBox:{
  //   width: wp('100%'),
  //   height: hp('15%'),
  //   flexDirection:'row-reverse',
  //   borderBottomColor:'#fff',
  // },
  // calcTextStyle:{
  //   fontSize: wp('16%'),
  //   color: 'white',
  //   paddingRight: wp('11%'),
  // },
})

export default App






