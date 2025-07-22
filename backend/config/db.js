import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kamalpal1056:Kamal1056@cluster0.xrxt2qp.mongodb.net/FoodDelivery')
        .then(() => console.log('DB CONNECTED'));
}

