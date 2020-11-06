import React, { Component } from 'react';
import { Image , StyleSheet, TouchableOpacity } from 'react-native';
import { Card, 
        CardItem, Thumbnail, Text, 
        Button, Icon, Left, Body, Right } from 'native-base';
import { mainColorDark } from '../../utils/colors';

class FoodCard extends Component {

    render() {
        return (
            <Card style={{ width: '100%', marginLeft: 0, elevation: 1 }}>
                <CardItem>
                    <Left>
                        <Thumbnail source={this.props.ownerImage} />
                        <Body>
                            <Text style={styles.title}>{this.props.foodName}</Text>
                            <Text style={styles.police} note>{this.props.category}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody style={{ margin: 0, padding: 0 }}>
                    <TouchableOpacity activeOpacity={0.95} style={styles.imageWrapper} onPress={this.props.onFoodSelected}>
                        <Body style={styles.imageWrapper}>
                            <Image style={styles.foodImage} resizeMode={'cover'} source={this.props.foodImage} />
                        </Body>
                    </TouchableOpacity>
                </CardItem>
                {this.props.description?
                    <CardItem>
                        <Text style={styles.description}>{this.props.description}</Text>
                    </CardItem>: null
                }
                <CardItem>
                    <Left>
                    {!this.props.isSaveScreen?
                            <Button transparent onPress={this.props.onSavedClick}>
                                <Icon style={styles.icon} active name="download" />
                                <Text style={styles.read}>Enregistrer</Text>
                            </Button>: null
                    }
                    </Left>
                    <Right>
                        <Button transparent onPress={() => this.props.onFoodSelected(this.props.item)}>
                            <Text style={styles.read}>Voir la recette</Text>
                            <Icon style={styles.icon} active name="arrow-round-forward" />
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Raleway',
        fontWeight: '600'
    },
    police: {
        fontFamily: 'Raleway'
    },
    imageWrapper: {
        width: "100%",
        margin: 0,
        padding: 0
    },
    foodImage: {
        height: 200,
        width: "100%"
    },
    bgImage: {
        width: "100%",
        height: "100%"
    },
    description: {
        fontFamily: 'Raleway',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'justify'
    },
    icon: {
        color: mainColorDark
    },
    read: {
        fontFamily: 'Raleway',
        color: mainColorDark
    }
});

export default FoodCard;