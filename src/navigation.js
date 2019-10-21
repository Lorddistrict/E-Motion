import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'Login',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign In',
                icon: require('assets/signin.png')
              }
            }
          },
        },
        {
          component: {
            name: 'Register',
            options: {
              bottomTab: {
                text: 'Sign Up',
                fontSize: 12,
                icon: require('assets/signup.png')
              }
            }
          },
        },
      ],
    }
  }
});

export const goWelcome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'Welcome',
          }
        }
      ],
    }
  }
});