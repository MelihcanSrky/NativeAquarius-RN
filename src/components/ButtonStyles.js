import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default class McButtonV2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var buttonStyle = ""
        var themeStyle = styles.lightTheme
        var textStyle = { color: (this.props.theme == "light") ? "#000" : "#fff" }
        var fontSize = ""
        if (this.props.shape == "c-sm") {
            buttonStyle = styles.circleSmall
            themeStyle = (this.props.theme == "light") ? styles.lightTheme : styles.darkTheme
            fontSize = {fontSize: 12}
        } else if (this.props.shape == "c-md") {
            buttonStyle = styles.circleMed
            themeStyle = (this.props.theme == "light") ? styles.lightTheme : styles.darkTheme
            fontSize = {fontSize: 18}
        } else if (this.props.shape == "c-bg") {
            buttonStyle = styles.circleBig
            themeStyle = (this.props.theme == "light") ? styles.lightTheme : styles.darkTheme
            fontSize = {fontSize: 24}
        } else if (this.props.shape == "s-sm") {
            buttonStyle = styles.squareSmall
            themeStyle = (this.props.theme == "light") ? styles.lightTheme : styles.darkTheme
            fontSize = {fontSize: 12}
        } else if (this.props.shape == "s-md") {
            buttonStyle = styles.squareMed
            themeStyle = (this.props.theme == "light") ? styles.lightTheme : styles.darkTheme
            fontSize = {fontSize: 18}
        } else if (this.props.shape == "s-bg") {
            buttonStyle = styles.squareBig
            themeStyle = (this.props.theme == "light") ? styles.lightTheme : styles.darkTheme
            fontSize = {fontSize: 24}
        }

        return (
            <TouchableOpacity
                style={[buttonStyle, themeStyle]}
            >
                <Text style={[textStyle, fontSize]}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    circleSmall: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    circleMed: {
        height: 75,
        width: 75,
        borderRadius: 37,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    circleBig: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    squareSmall: {
        height: 40,
        width: 80,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    squareMed: {
        height: 45,
        width: 90,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    squareBig: {
        height: 50,
        width: 100,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    lightTheme: {
        backgroundColor: "#fff",
        borderColor: "#000"
    },
    darkTheme: {
        backgroundColor: "#000",
        borderColor: "#fff"
    }
})