import { supabase } from "../../lib/supabase";

export class SupabaseService {
  // Profiles
  static async getAllProfiles() {
    return await supabase.from("profiles").select("*");
  }

  static async getProfileById(id: string) {
    return await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();
  }

  // Budgets
  static async getAllBudgets() {
    return await supabase.from("budgets").select("*");
  }

  static async getBudgetById(id: string) {
    return await supabase
      .from("budgets")
      .select("*")
      .eq("id", id)
      .single();
  }

  static async postBudget(budget: {
    profile_id: string;
    name: string;
    limit_amount: number;
  }) {
    return await supabase
      .from("budgets")
      .insert([budget]);
  }

  // Transactions
  static async getAllTransactions() {
    return await supabase
      .from("transactions")
      .select("*");
  }

  static async getTransactionById(id: string) {
    return await supabase
      .from("transactions")
      .select("*")
      .eq("id", id)
      .single();
  }

  static async postTransaction(transaction: {
    profile_id: string;
    budget_id?: string;
    amount: number;
    description?: string;
    category?: string;
  }) {
    return await supabase
      .from("transactions")
      .insert([transaction]);
  }
  static async getTransactions() {
  return await supabase
    .from("transactions")
    .select("*")
    .order("transaction_date", { ascending: false });
}

  static async addTransaction(transaction: {
    profile_id: string;
    amount: number;
    description?: string;
    category?: string;
    transaction_date?: string;
  }) {
  return await supabase
    .from("transactions")
    .insert([transaction]);
  }
}