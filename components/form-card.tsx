// components/JoinForm.tsx
'use client'

import React, { useState } from 'react'
import axios from 'axios'

export default function JoinForm() {
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    bi: '',
    endereco: '',
    telefone: '',
    email: '',
    profissao: '',
    motivo: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess('')
    setError('')

    try {
      const response = await axios.post('/api/members', formData)
      if (response.data.success) {
        setSuccess(`Obrigado por se juntar! Seu número de membro é ${response.data.membro.numeroMembro}`)
        setFormData({
          nome: '',
          dataNascimento: '',
          bi: '',
          endereco: '',
          telefone: '',
          email: '',
          profissao: '',
          motivo: '',
        })
      } else {
        setError('Ocorreu um erro. Tente novamente.')
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Erro ao enviar o formulário.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-50 p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Junte-se Agora</h2>
      {success && <p className="text-green-600 mb-4">{success}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          value={formData.nome}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="bi"
          placeholder="Número do BI"
          value={formData.bi}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={formData.endereco}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="profissao"
          placeholder="Profissão"
          value={formData.profissao}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <textarea
          name="motivo"
          placeholder="Por que deseja se juntar ao ANAMOLA?"
          value={formData.motivo}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  )
}
