import mongoose from 'mongoose';

// Define the schema for an image URL and associated links
const UrlSchema = new mongoose.Schema({
    scenario: { type: String, required: true },
    url: { type: String, required: true }
}, { _id: false });

// Define the main social media schema
const SocialMediaSchema = new mongoose.Schema({
    channelName: { type: String, required: true }, // Added channelName to differentiate channels
    divSelector: { type: String, required: true },
    data: [UrlSchema],
    loginByPass: { type: String } // Field to store user-provided code
});

const SocialMedia = mongoose.models.SocialMedia || mongoose.model('SocialMedia', SocialMediaSchema);
export default SocialMedia;
