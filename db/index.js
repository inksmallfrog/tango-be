import mongoose from "./db";
import PassageSchema from "./models/Passage";

export default {
    Passage: mongoose.model('Passage', PassageSchema)
}
