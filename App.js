import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

export default function App() {
  function changeValue() {
    first == true ? setfirst(false) : setfirst(true);
  }
  const [first, setfirst] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <View style={styles.forms}>
        <Text style={styles.login}>{first == true ? 'Login' : 'Signup'}</Text>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <TextInput
            placeholder="FullName"
            style={{
              height: 40,
              width: 280,
              margin: 12,
              // borderWidth: 1,
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
              padding: 10,
              marginTop: 10,
              display:`${first==true?"none":"flex"}`
            }}
          />
          <TextInput placeholder="Email:" style={styles.input} />
          <TextInput
            secureTextEntry={true}
            placeholder="Password:"
            style={styles.input}
          />
          <TouchableOpacity>
            <Text style={styles.button}>
              {first == true ? 'Login' : 'Signup'}
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', paddingTop: 30}}>
            <Text style={{fontSize: 15}}>
              {first == true ? 'Create Account?' : 'Already a user?'}
            </Text>
            <Text
              onPress={changeValue}
              style={{marginLeft: 30, fontSize: 15, fontWeight: 'bold'}}>
              {first == true ? 'Signup' : 'Login'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#511be3',
    flex: 1,
  },
  input: {
    height: 40,
    width: 280,
    margin: 12,
    // borderWidth: 1,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  login: {
    color: 'black',
    fontSize: 40,
    paddingTop: 30,
    paddingLeft: 20,
  },
  forms: {
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
  },
  welcome: {
    fontSize: 50,
    color: 'white',
    paddingTop: '60%',
    paddingBottom: '10%',
    paddingLeft: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0000fe',
    padding: 10,
    color: 'white',
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 60,
    marginTop: 30,
    fontSize: 20,
  },
});
