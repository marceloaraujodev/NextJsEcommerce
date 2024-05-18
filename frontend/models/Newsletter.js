import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  active: {
    type: Boolean,
    default: true
  }

}, { timestamps: true, unique: true }
);

const Newsletter = mongoose.models?.Newsletter || mongoose.model('Newsletter', NewsletterSchema);

export default Newsletter;

