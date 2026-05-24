import { View, Text, StyleSheet } from "react-native";

export default function TransactionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>EXPENSES</Text>

      <Text style={styles.sectionTitle}>HISTORY LOG</Text>

      <View style={styles.transactionItem}>
        <View>
          <Text style={styles.date}>FEB 22</Text>
          <Text style={styles.name}>CYBERPUNK CAFE</Text>
        </View>

        <Text style={styles.amount}>-$12.50</Text>
      </View>

      <View style={styles.transactionItem}>
        <View>
          <Text style={styles.date}>FEB 21</Text>
          <Text style={styles.name}>VAPOR MART</Text>
        </View>

        <Text style={styles.amount}>-$45.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#352DA9",
    padding: 24,
    width: "100%",
  },

  header: {
    color: "#E5DE90",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 16,
  },

  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#5BFF32",
    paddingVertical: 12,
  },

  date: {
    color: "#FFFFFF",
    fontSize: 10,
  },

  name: {
    color: "#FA8128",
    fontWeight: "bold",
    fontSize: 16,
  },

  amount: {
    color: "#FA8128",
    fontWeight: "bold",
    fontSize: 16,
  },
});