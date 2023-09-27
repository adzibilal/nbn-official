import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string, {
            dbName: 'nbnofficial',
            //@ts-ignore
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected')
    } catch (error) {
        console.error('MongoDB connection error:', error)
        process.exit(1)
    }
}

export default connectDB
