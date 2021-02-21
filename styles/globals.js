import {StyleSheet} from 'react-native';

export const globals = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#28303b',
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff',
  },
  link: {
    color: '#fff',
    marginTop: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
});
