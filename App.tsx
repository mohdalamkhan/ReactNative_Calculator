/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
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
    // flex: 1,
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor:'#000',
    alignItems: 'center',
  },
  calcHeading:{
    fontSize: wp('10%'),
    color:'#fff',
    // marginTop: hp('5%'),
  },
  calcBox:{
   width: wp('100%'),
   height: hp('10%'),
  //  backgroundColor:'red',
   justifyContent:'center',
   alignItems:'center',
  },

  displayCalcBox:{
    // backgroundColor:'red',
    width: wp('100%'),
    height: hp('15%'),
    flexDirection:'row-reverse',
    // marginHorizontal:'1%',
  },
  inputStyle:{
    fontSize: wp('16%'),
    color: 'white',
    // paddingHorizontal: wp('6%'),
    paddingRight: wp('11%'),
  },
  calcKeysbox:{
    width: wp('100%'),
    // height: hp('50%'),
    // backgroundColor:'white',
    marginTop: hp('1%'),
    flexDirection:'row',
    justifyContent:'center',
    // margin: wp('10%'),
    // alignItems:'center',
  },

  calcKeysGrey:{
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    backgroundColor:'grey',
    // backgroundColor:'#353030',
    margin: wp('2%'),
    // paddingHorizontal: wp('10%'),
    // marginHorizontal: wp('3%'),
    // marginLeft: wp('4%'),
  },

  calcKeysYellowOrange:{
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    // backgroundColor:'grey',
    backgroundColor:'#F39C12',
    margin: wp('2%'),
    // paddingHorizontal: wp('10%'),
    // marginHorizontal: wp('3%'),
    // marginLeft: wp('4%'),
  },

  calcNumKeys:{
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    // backgroundColor:'grey',
    backgroundColor:'#353030',
    margin: wp('2%'),
    // paddingHorizontal: wp('10%'),
    // marginHorizontal: wp('3%'),
    // marginLeft: wp('4%'),
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

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
