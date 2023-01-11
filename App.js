import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card ,Button} from '@rneui/themed';
import Deck from './src/Deck';
const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg' },
  { id: 2, text: 'Card #2', uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg' },
  { id: 3, text: 'Card #3', uri: 'https://thumbs.dreamstime.com/b/fast-food-concept-greasy-fried-restaurant-take-out-as-onion-rings-burger-hot-dogs-fried-chicken-french-fries-31114163.jpg' },
  { id: 4, text: 'Card #4', uri: 'https://www.westcentralfoodservice.com/wp-content/uploads/2019/04/5-food-trends-2019-no-title.jpg' },
  { id: 5, text: 'Card #5', uri: 'https://wistatefair.com/fair/wp-content/uploads/2022/06/Black-bean-burrito-balls-600x400-1.png' },
  { id: 6, text: 'Card #6', uri: 'https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/16:9/w_1280,c_limit/0817-murray-mancini-dried-tomato-pie.jpg' },
  { id: 7, text: 'Card #7', uri: 'https://d3ldzx7fxfvsfy.cloudfront.net/kraft8x/17/1654757113314_883x1501.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg' },
];




export default function App() {
  const renderCard = (item) => {
    return (
     <Card
     key={item.id}
     > 
     <Card.Title>{item.text}</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
              item.uri,
            }}
          />
  <Text>
    i can customize the card more 
  </Text>
  <Button
            icon={
              {name:'code'}
            }
            backgroundColor='#03A9F4'
            
            title="VIEW NOW"
          />
     </Card>
    );
  }
  const  renderNoMoreCards=()=>{
    return (
      <Card>
        <Card.Title>All Done!</Card.Title>
        <Text style={{marginBottom:10}}>
          There's no more content here !
        </Text>
        <Button
            icon={
              {name:'code'}
            }
            backgroundColor='#03A9F4'
            
            title="Get more!"
          />
      </Card>
    )
  }
  return (
    <View style={styles.container}>
      <Deck
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
