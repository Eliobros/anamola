import React from "react"
import Link from "next/link"

const news = [
  {
    id: 1,
    title: "Declaração do Presidente Venâncio Mondlane Demonstra Maturidade Política",
    excerpt: "A declaração do Presidente Venâncio Mondlane revela maturidade política e visão estratégica. Ao não cair na pressão imediata de anunciar candidatura, mostra que o foco do ANAMOLA não é apenas disputar poder, mas construir uma força política sólida, com legitimidade e capacidade de diálogo.",
    date: "15 de Agosto, 2024",
    category: "Políticas",
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 2,
    title: "ANAMOLA Realiza Encontro Nacional de Lideranças",
    excerpt: "Líderes do partido de todas as províncias se reuniram para discutir estratégias de desenvolvimento e crescimento.",
    date: "10 de Agosto, 2024",
    category: "Eventos",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Nova Iniciativa de Desenvolvimento Comunitário",
    excerpt: "Lançamos um programa para apoiar projetos de desenvolvimento nas comunidades rurais de Moçambique.",
    date: "5 de Agosto, 2024",
    category: "Projetos",
    image: "/api/placeholder/400/250"
  }
]

export default function NewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Últimas Notícias
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fique por dentro das últimas atividades, eventos e iniciativas do partido ANAMOLA.
          </p>
        </div>

        {/* Notícia Principal */}
        <div className="mb-12">
          {news.filter(item => item.featured).map((item) => (
            <article
              key={item.id}
              className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    DESTAQUE
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {item.excerpt}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Reconhecer que "as condições estão reunidas para integrar a comissão do Diálogo Nacional" é sinal de responsabilidade patriótica, porque antes de ambições pessoais, está o compromisso com a estabilidade e o futuro de Moçambique.
                </p>
                <Link
                  href={`/noticias/${item.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Ler mais →
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Outras Notícias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.filter(item => !item.featured).map((item) => (
            <article
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">📰</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link
                  href={`/noticias/${item.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ler mais →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/noticias"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            Ver Todas as Notícias
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
