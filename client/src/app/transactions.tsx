import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { SupabaseService } from "../services/supabaseService";

export default function TransactionsScreen() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [transactionDate, setTransactionDate] = useState("");

  const TEST_PROFILE_ID = "test";

  useEffect(() => {
    SupabaseService.getTransactions().then(({ data, error }) => {
      if (error) {
        console.log(error);
      } else {
        setTransactions(data || []);
      }
    });
  }, []);

  async function handleAddTransaction() {
  try {
    const { error } = await SupabaseService.addTransaction({
      profile_id: TEST_PROFILE_ID,
      amount: Number(amount),
      description,
      category,
      transaction_date: transactionDate || undefined,
    });

    if (error) {
      throw error;
    }

    setDescription("");
    setAmount("");
    setCategory("");
    setTransactionDate("");
    setModalVisible(false);

    const { data } = await SupabaseService.getTransactions();

    setTransactions(data || []);
  } catch (e) {
    console.error(e);
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.header}>EXPENSES</Text>

      <Pressable
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>ADD TRANSACTION</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>HISTORY LOG</Text>

      {transactions.map((item) => (
        <View key={item.id} style={styles.transactionItem}>
          <View>
            <Text style={styles.date}>{item.transaction_date}</Text>
            <Text style={styles.name}>{item.description}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>

          <Text style={styles.amount}>-${item.amount}</Text>
        </View>
      ))}

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add Transaction</Text>

            <TextInput
              style={styles.input}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
            />

            <TextInput
              style={styles.input}
              placeholder="Amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              placeholder="Category"
              value={category}
              onChangeText={setCategory}
            />

            <TextInput
              style={styles.input}
              placeholder="Date YYYY-MM-DD"
              value={transactionDate}
              onChangeText={setTransactionDate}
            />

            <Pressable
              style={styles.saveButton}
              onPress={handleAddTransaction}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>

            <Pressable
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

  addButton: {
    backgroundColor: "#5BFF32",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },

  addButtonText: {
    color: "#352DA9",
    fontWeight: "bold",
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

  category: {
    color: "#FFFFFF",
    fontSize: 11,
    marginTop: 2,
  },

  amount: {
    color: "#FA8128",
    fontWeight: "bold",
    fontSize: 16,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 12,
    width: "85%",
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },

  saveButton: {
    backgroundColor: "#352DA9",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 8,
  },

  cancelButton: {
    backgroundColor: "#FA8128",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});