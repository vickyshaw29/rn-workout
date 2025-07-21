import { Text, View } from 'react-native';
import { auth } from '../../firebase';
import { useEffect, useState } from 'react';

const Home = () => {
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    try {
      const currentUser = auth.currentUser;
      console.log({currentUser}, "currentUser...")
      setStatus(
        `Firebase initialized. User: ${currentUser ? currentUser.uid : 'None'}`,
      );
    } catch (error) {
      console.log(error, "error")
      setStatus('Firebase initialization failed.');
    }
  }, []);
  return (
    <View>
      <Text>Title : Home</Text>

        <Text style={{color:"green"}}>{status}</Text>

    </View>
  );
};

export default Home;
