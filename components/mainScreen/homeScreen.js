import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class HomeScreen extends Component() {
  render() {
    const calidad = 100;
    return (
      <LinearGradient
        style={styles.container}
        colors={["#eae7e3", "#cad8d2"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <LinearGradient
          style={styles.card}
          colors={["#9abcdd", "#97c2c1"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.flex1}>
            <LinearGradient
              style={styles.circulo}
              colors={["#eae7e3", "#9abcdd"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
              <Image
                style={styles.titulo}
                source={require("./images/ph.png")}
              />
              {/* <Text style={styles.titulo}>Ph: </Text> */}
            </LinearGradient>
          </View>
          <View style={styles.flex2}>
            <Text style={styles.valor}>7.0</Text>
            <Text> Ph </Text>
          </View>
        </LinearGradient>

        {/* carta de ppm */}

        <LinearGradient
          style={styles.card}
          colors={["#697fa3", "#9abcdd"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.flex1}>
            <LinearGradient
              style={styles.circulo}
              colors={["#eae7e3", "#697fa3"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
              <Image
                style={styles.titulo}
                source={require("./images/ppm.png")}
              />
            </LinearGradient>
          </View>
          <View style={styles.flex2}>
            <Text style={styles.valor}>
              100 <Text></Text>
            </Text>
            <Text> PPM </Text>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.cardbt}
          colors={["#97c2c1", "#cad8d2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {calidad <= 450 ? (
            <Image style={styles.cal} source={require("./images/buena.png")} />
          ) : (
            <Image style={styles.cal} source={require("./images/mala.png")} />
          )}
          {calidad <= 450 ? (
            <View style={styles.flex3}>
              <Text style={styles.cali}>Agua en buen estado</Text>
            </View>
          ) : (
            <View style={styles.flex3}>
              {" "}
              <Text>Agua con mucha contaminación</Text>
            </View>
          )}
        </LinearGradient>
        <StatusBar style="auto" />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    margin: "5%",
    width: "90%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "#97c2c1",
    //alignItems: 'center',
  },
  cardbt: {
    flex: 2,
    flexDirection: "row",
    //margin: '10%',
    width: "100%",
    height: 50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#9abcdd",
    //alignItems: 'center',
  },
  titulo: {
    //fontSize:40,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  cal: {
    justifyContent: "left",
    width: "50%",
    height: "100%",
  },
  cali: {
    justifyContent: "left",
    alignItems: "center",

    fontSize: 30,
    fontWeight: "bold",
  },
  valor: {
    fontSize: 70,
    paddingBottom: 10,
  },
  calificacion: {
    fontSize: 60,
  },

  circulo: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#697fa3",
    borderTopRightRadius: "100%",
    //  marginLeft:20,
    width: "130%",
    height: "89%",
  },
  flex1: {
    flex: 1,
    // alignItems: 'botton',
    justifyContent: "flex-end",
    margin: 0,
    padding: 0,
    //position: 'absolute',
  },
  flex2: {
    //margin:20,
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  flex3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // marginTop:2,
    marginRight: 5,
  },
});
