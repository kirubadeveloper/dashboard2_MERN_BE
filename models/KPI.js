import mongoose from "mongoose";

const Schema = mongoose.Schema;

const daySchema = mongoose.Schema({
    date: String,
    revenue: Number,
    expenses: Number,
});

const monthSchema = new Schema({
    month: String,
    revenue: Number,
    expenses: Number,
    operationalExpenses: Number,
    nonOperationalExpenses: Number
});

const KPISchema = new Schema({
    totalProfit: Number,
    totalRevenue: Number,
    totalExpenses: Number,
    expensesByCategory: {
        type: Map,
        of: Number 
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema]
}, { timestamps: true });

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;