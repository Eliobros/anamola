import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Member from '@/models/Member';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validação básica
    if (!data.nome || !data.bi || !data.telefone) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: nome, BI, telefone.' },
        { status: 400 }
      );
    }

    await connectDB();

    const novoMembro = await Member.create({
      nome: data.nome,
      dataNascimento: data.dataNascimento,
      bi: data.bi,
      endereco: data.endereco,
      telefone: data.telefone,
      email: data.email,
      profissao: data.profissao,
      motivo: data.motivo,
      numeroMembro: `ANM-${Date.now()}`
    });

    return NextResponse.json({ success: true, membro: novoMembro }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao registrar membro.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const membros = await Member.find().sort({ createdAt: -1 });
    return NextResponse.json(membros);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao buscar membros.' }, { status: 500 });
  }
}
