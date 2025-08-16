import Link from "next/link"

const news = [
  {
    id: 1,
    title: "Declaração do Presidente Venâncio Mondlane Demonstra Maturidade Política",
    excerpt: "A declaração do Presidente Venâncio Mondlane revela maturidade política e visão estratégica. Ao não cair na pressão imediata de anunciar candidatura, mostra que o foco do ANAMOLA não é apenas disputar poder, mas construir uma força política sólida, com legitimidade e capacidade de diálogo.",
    fullContent: "A declaração do Presidente Venâncio Mondlane revela maturidade política e visão estratégica. Ao não cair na pressão imediata de anunciar candidatura, mostra que o foco do ANAMOLA não é apenas disputar poder, mas construir uma força política sólida, com legitimidade e capacidade de diálogo. Reconhecer que \"as condições estão reunidas para integrar a comissão do Diálogo Nacional\" é sinal de responsabilidade patriótica, porque antes de ambições pessoais, está o compromisso com a estabilidade e o futuro de Moçambique.",
    date: "15 de Agosto, 2024",
    category: "Políticas",
    author: "Equipe ANAMOLA",
    featured: true
  },
  {
    id: 2,
    title: "ANAMOLA Realiza Encontro Nacional de Lideranças",
    excerpt: "Líderes do partido de todas as províncias se reuniram para discutir estratégias de desenvolvimento e crescimento.",
    date: "10 de Agosto, 2024",
    category: "Eventos",
    author: "Secretaria de Comunicação"
  },
  {
    id: 3,
    title: "Nova Iniciativa de Desenvolvimento Comunitário",
    excerpt: "Lançamos um programa para apoiar projetos de desenvolvimento nas comunidades rurais de Moçambique.",
    date: "5 de Agosto, 2024",
    category: "Projetos",
    author: "Departamento de Projetos"
  },
  {
    id: 4,
    title: "Visita às Comunidades Rurais de Gaza",
    excerpt: "Nossa equipe visitou comunidades rurais para ouvir as necessidades locais e apresentar nossas propostas.",
    date: "1 de Agosto, 2024",
    category: "Eventos",
    author: "Equipe Regional"
  },
  {
    id: 5,
    title: "Parceria com Organizações Internacionais",
    excerpt: "ANAMOLA estabelece parcerias estratégicas para promover o desenvolvimento sustentável.",
    date: "28 de Julho, 2024",
    category: "Cooperação",
    author: "Secretaria de Relações Internacionais"
  },
  {
    id: 6,
    title: "Programa de Capacitação para Jovens",
    excerpt: "Iniciamos um programa de capacitação profissional para jovens em situação de vulnerabilidade.",
    date: "25 de Julho, 2024",
    category: "Projetos",
    author: "Departamento de Juventude"
  }
]

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Notícias e Atualizações
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Fique por dentro das últimas atividades, eventos e iniciativas do partido ANAMOLA.
          </p>
        </div>
      </div>

      {/* Notícia Principal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {news.filter(item => item.featured).map((item) => (
            <article
              key={item.id}
              className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg overflow-hidden shadow-lg mb-16"
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {item.title}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    {item.fullContent}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Por: {item.author}
                  </span>
                  <Link
                    href="/noticias"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    ← Voltar às Notícias
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lista de Notícias */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Outras Notícias
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.filter(item => !item.featured).map((item) => (
              <article
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl">📰</span>
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
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {item.author}
                    </span>
                    <Link
                      href={`/noticias/${item.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
