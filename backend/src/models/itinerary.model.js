import mongoose, { Schema } from "mongoose";


const destinationSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    significance: {
        type: String,
        trim: true // Matches the "significance" in the example
    },
    city: {
        type: String,
        required: true,
        trim: true // For the "city" field in the example
    },
    state: {
        type: String,
        required: true,
        trim: true // For the "state" field in the example
    },
    type: {
        type: String,
        required: true, // Matches the "type" field, e.g., "Temple"
        trim: true
    },
    airportWithin50kmRadius: {
        type: Boolean,
        required: true // Matches the "airportWithin50kmRadius" field
    },
    costPerDay: {
        type: Number,
        required: true
    },
    banner: {
        type: String,
        required: true
    }
});
const hotelSchema = new Schema({
    HotelName: {
        type: String,
        required: true,
        trim: true
    },
    HotelRating: {
        type: String,
        required: true,
        enum: ["OneStar", "TwoStar", "ThreeStar", "FourStar", "FiveStar"], // Using enum for ratings
        trim: true
    },
    Address: {
        type: String,
        required: true,
        trim: true
    },
    CountryName: {
        type: String,
        required: true,
        trim: true
    },
    CountryCode: {
        type: String,
        required: true,
        trim: true
    },
    CityName: {
        type: String,
        required: true,
        trim: true
    },
    TotalFare: {
        type: Number,
        required: true,
        min: 0
    },
    TotalTax: {
        type: Number,
        required: true,
        min: 0
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    longitude: {
        type: Number,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    }
  
}, { _id: false });


const permissionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    access: {
        type: String,
        enum: ["owner", "view", "edit"],
        required: true
    }
}, { _id: false });

const itinerarySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    banner: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    Days: {
        type: Number,
        required: true,
        min: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    sharable_link :{
        type: String,
        default:""
    },
    destinations: [destinationSchema],
    hotels: [hotelSchema],
    budget: {
        type: Number,
        required: true,
        min: 0
    },
    notes: {
        type: String,
        trim: true
    },
    permissions: [permissionSchema]
}, {
    timestamps: true // Automatically handles `createdAt` and `updatedAt`
});

export const Itinerary =  mongoose.model("Itinerary", itinerarySchema);
