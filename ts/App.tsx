/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackScreenProps } from "@react-navigation/stack";
import NastingNavigator from './components/nesting.navigator'


function DetailsScreen({ route, navigation }: DetailScreenProps) {
    /* 2. Get the param */
    const { itemId, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}


type RootStackParamList = {
  Home: undefined;
  Details: {itemId: number, otherParam?: string};
  ListView: undefined
  NastingNavigator: undefined
};

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">
type DetailScreenProps = StackScreenProps<RootStackParamList, "Details">
function HomeScreen({navigation}: HomeScreenProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <View style={{flex:1, backgroundColor: 'red', alignItems: 'center'}}>
            <Text >Home Screen</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'green', alignItems: 'center'}}>
            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
          </View>
          <View style={{flex: 1, backgroundColor: 'blue', alignItems: 'center'}}>
            <Button
              title="ListView"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('ListView');
              }}
            />
          </View>
          <View style={{flex: 1, backgroundColor: 'blue', alignItems: 'center'}}>
            <Button
              title="NastingNavigator"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('NastingNavigator');
              }}
            />
          </View>
        </View>
    );
}

type CarouselProps = StackScreenProps<RootStackParamList, "ListView">

// const arr = Array.from({length: 5}, () => 0);

const arr = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
]

const styles = StyleSheet.create({
  container: {
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: 100,
    backgroundColor: 'tomato',
  },
  list: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  }
});

const ListView = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={arr}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={ListView} />
      <Tab.Screen name="Messages" component={DetailsScreen} initialParams={{ itemId: 42 }} />
    </Tab.Navigator>
  );
}

//
// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home" >
//               <Stack.Screen name="Home" component={HomeScreen} />
//               <Stack.Screen name="ListView" component={ListView} />
//               <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 42 }}/>
//               <Stack.Screen name="NastingNavigator" component={NastingNavigator} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ListView" component={ListView} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} initialParams={{ itemId: 42 }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;