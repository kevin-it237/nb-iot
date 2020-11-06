import { Navigation } from 'react-native-navigation';
import { ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

//colors
import { mainColor } from './colors';
import logo from '../assets/imgs/small_logo.png';

// Render the home page
export const setAppRoot = () => {
    Promise.all([
        Icon.getImageSource('md-home', 30, mainColor),
        Icon.getImageSource('md-search', 30, mainColor),
        Icon.getImageSource('md-book', 30, mainColor),
        Icon.getImageSource('md-person', 30, mainColor),
        Icon.getImageSource('md-add-circle', 30, mainColor),
        Icon.getImageSource('md-more', 30, mainColor),
        Icon.getImageSource('md-search', 25, mainColor),
    ]).then(sources => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [{
                        stack: {
                            children: [{
                                component: {
                                    name: 'kamerFood.home',
                                    options: {
                                        topBar: {
                                            // rightButtons: {
                                            //     id: 'menu',
                                            //     icon: sources[5]
                                            // },
                                            leftButtons: {
                                                id: 'drawerBtn',
                                                icon: logo
                                            },
                                            title: {
                                                fontFamily: 'Raleway',
                                            }
                                        }
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 'EXPLORER',
                                    icon: sources[0],
                                    testID: 'FIRST_TAB_BAR_BUTTON'
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'kamerFood.search',
                                    passProps: {
                                        text: 'This is tab 1'
                                    },
                                    options: {
                                        topBar: {
                                            // rightButtons: {
                                            //     id: 'menu',
                                            //     icon: sources[5]
                                            // },
                                            leftButtons: {
                                                id: 'drawerBtn',
                                                icon: logo
                                            },
                                        }
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 'RECHERCHE',
                                    icon: sources[1],
                                    testID: 'FIRST_TAB_BAR_BUTTON'
                                }
                            }
                        }
                    }, 
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'kamerFood.publishrecipe',
                                    passProps: {
                                        text: 'This is tab 1'
                                    },
                                    options: {
                                        topBar: {
                                            // rightButtons: {
                                            //     id: 'menu',
                                            //     icon: sources[5]
                                            // },
                                            leftButtons: {
                                                id: 'drawerBtn',
                                                icon: logo
                                            },
                                        }
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 'AJOUTER',
                                    icon: sources[4]
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'kamerFood.userslist',
                                    passProps: {
                                        text: 'This is tab 1'
                                    },
                                    options: {
                                        topBar: {
                                            // rightButtons: [
                                            // {
                                            //     id: 'searchUser',
                                            //     icon: sources[6]
                                            // }],
                                            leftButtons: {
                                                id: 'drawerBtn',
                                                icon: logo
                                            },
                                        }
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 'CUISINIERS',
                                    icon: sources[2],
                                    testID: 'FIRST_TAB_BAR_BUTTON'
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'kamerFood.account',
                                    passProps: {
                                        text: 'This is tab 1'
                                    },
                                    options: {
                                        topBar: {
                                            // rightButtons: {
                                            //     id: 'menu',
                                            //     icon: sources[5]
                                            // },
                                            leftButtons: {
                                                id: 'drawerBtn',
                                                icon: logo
                                            },
                                        }
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 'MES RECETTES',
                                    icon: sources[3],
                                    testID: 'FIRST_TAB_BAR_BUTTON'
                                }
                            }
                        }
                    }]
                }
            }
        });
    })
}

export const storeFood = (food) => {
    // Verify if there is already a food saved
    AsyncStorage.getItem('savedFood').then(data => {
        if(data !== null) {
            // value previously stored
            let previousData = JSON.parse(data);
            let ids = previousData.map(el => {
                return el.id;
            })
            if(!ids.includes(food.id)) {
                previousData.push(food)
                AsyncStorage.setItem('savedFood', JSON.stringify(previousData)).then(() => {
                    ToastAndroid.show('Recette enregistrée!', ToastAndroid.SHORT);
                });
            } else {
                ToastAndroid.show('Déja enregistré!', ToastAndroid.SHORT);
            }
        } else {
            const dataToStore = [food];
            AsyncStorage.setItem('savedFood', JSON.stringify(dataToStore)).then(() => {
                ToastAndroid.show('Recette enregistrée!', ToastAndroid.SHORT);
            });
        }
    }).catch(err => {
        console.log(err)
    });
}
