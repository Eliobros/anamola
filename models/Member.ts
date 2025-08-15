import mongoose, { Schema } from 'mongoose';

const memberSchema = new Schema({
  nome: { type: String, required: true },
  dataNascimento: { type: String },
  bi: { type: String, required: true },
  endereco: { type: String },
  telefone: { type: String, required: true },
  email: { type: String },
  profissao: { type: String },
  motivo: { type: String },
  numeroMembro: { type: String, unique: true, required: true },
}, { timestamps: true });

export default mongoose.models.Member || mongoose.model('Member', memberSchema);
