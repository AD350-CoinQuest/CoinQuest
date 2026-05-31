import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { supabase } from "../../lib/supabase";

export default function TransactionsScreen() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    getTransactions();
  }, []);

  async function getTransactions() {
    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .order("transaction_date", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setTransactions(data || []);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>EXPENSES</Text>

      <Text style={styles.sectionTitle}>HISTORY LOG</Text>

      {transactions.map((item) => (
        <View key={item.id} style={styles.transactionItem}>
          <View>
            <Text style={styles.date}>{item.transaction_date}</Text>

            <Text style={styles.name}>
              {item.description}
            </Text>
          </View>

          <Text style={styles.amount}>
            -${item.amount}
          </Text>
        </View>
      ))}
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