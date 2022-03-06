import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function History() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Historial</Text>
            <View style={styles.information}>
                <Text style={styles.textInformation}>0-5   = Ácida</Text>
                <Text style={styles.textInformation}>6-8   = Buena Calidad</Text>
                <Text style={styles.textInformation}>9-14 = Alcalina</Text>
            </View>
            <View style={styles.table}>
                <Text style={styles.textTableTitle}>Fecha</Text>
                <Text style={styles.textTableTitle}>Ph</Text>
                <Text style={styles.textTableTitle}>PPM</Text>
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.dataContainerColumn}>
                    <Text style={styles.textTable}>05/03/2022</Text>
                    <Text style={styles.textTablePh}>8</Text>
                    <Text style={styles.textTable}>2090</Text>
                </View>
                <View style={styles.dataContainerColumn}>
                    <Text style={styles.textTable}>06/03/2022</Text>
                    <Text style={styles.textTablePh}>7</Text>
                    <Text style={styles.textTable}>2070</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

/*
COLORES
PRIMARIO: #9abcdd
SECUNDARIO: #97c2c1
text: #697fa3
green: #cad8d2
bone: #eae7e3
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        alignItems: "center",
        justifyContent: "top",
        paddingTop: "24px",
    },
    information: {
        backgroundColor: "#eae7e3",
        width: "280px",
        height: "auto",
        margin: "20px",
        padding: "12px",
        borderRadius: "12px",
    },
    textInformation: {
        paddingLeft: "12px",
        fontWeight: "500",
    },
    table: {
        backgroundColor: "#cad8d2",
        width: "280px",
        height: "auto",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderTopRightRadius: "12px",
        borderTopLeftRadius: "12px",
    },
    textTableTitle: {
        paddingLeft: "10px",
        paddingRight: "10px",
        fontWeight: "bold",
        color: "#697fa3",
    },
    /*TERCER CONTENEDOR*/
    dataContainer: {
        backgroundColor: "#cad8d2",
        width: "280px",
        height: "auto",
        paddingBottom: "10px",
        paddingLeft: "10px",
        paddingRight: "10px",
        display: "flex",
        flexDirection: "column",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        marginBottom: "20px",
    },
    dataContainerColumn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: "5px",
        paddingTop: "5px",
        borderTopColor: "#f1f1f1",
        borderTopWidth: "1px",
    },
    textTable: {
        color: "#697fa3",
    },

    textTablePh: {
        color: "#697fa3",
        marginRight: 15,
    },
    /*GENERAL*/
    title: {
        textAlign: "start",
        color: "#697fa3",
        fontSize: 48,
        fontWeight: "bold",
    },
    subtitle: {
        marginTop: "20px",
        color: "#9abcdd",
        fontSize: 16,
        fontWeight: "bold",
    },
});
