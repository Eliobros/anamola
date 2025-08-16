import Image from "next/image"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre o ANAMOLA
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Conheça nossa história, missão e os valores que nos guiam na construção 
            de um Moçambique mais próspero e justo.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa História Oficial
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O ANAMOLA nasceu de um processo democrático e transparente, 
              aprovado oficialmente pelo Ministério da Justiça de Moçambique.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Aprovação Oficial
              </h3>
              <p className="text-blue-700 font-medium">
                15 de Agosto, 2024
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                O partido de Venâncio Mondlane <strong>"ANAMOLA"</strong>, que significa 
                <strong> Aliança Nacional para um Moçambique Livre e Autónomo</strong>, 
                foi aprovado pelo Ministério da Justiça, Assuntos Constitucionais e Religiosos de Moçambique.
              </p>

              <p>
                A notícia foi avançada, na manhã desta sexta-feira (15.08), por Dinis Tivane, 
                assessor do político e ex-candidato presidencial, na sua página do Facebook.
              </p>

              <blockquote className="bg-blue-50 border-l-4 border-blue-600 p-6 italic text-lg">
                "Irmãos, é oficial! Agora é ANAMOLA. Recebi, faz uns minutos, uma chamada do nosso advogado, 
                o ilustre Dr. Mutola. Ele disse: Dinis, nosso partido está, finalmente, aprovado. 
                Agora é ANAMOLA. Festejemos o início formal da revolução moçambicana"
              </blockquote>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/anamola.jpg"
                  alt="ANAMOLA - Partido Político"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                  priority
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Venâncio Mondlane havia submetido, a 6 de junho, no Ministério da Justiça, 
              Assuntos Constitucionais e Religiosos, um recurso com as respostas das exigências do Governo, 
              incluindo a alteração da sigla do seu partido Anamalala, que agora passou para Anamola.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-800 mb-2">📝 Significado da Mudança</h4>
              <p className="text-yellow-700">
                <strong>Anamalala</strong> significa "vai acabar" ou "acabou", expressão usada por Venâncio Mondlane 
                durante a campanha para as eleições gerais de 09 de outubro de 2024 - cujos resultados não reconhece - 
                e que se popularizou durante os protestos por si convocados nos meses seguintes.
              </p>
            </div>

            <p>
              A informação da alteração da proposta do acrónimo Anamalala para Anamola, significando igualmente 
              <strong>Aliança Nacional para um Moçambique Livre e Autónomo</strong>, consta do recurso que o antigo 
              candidato presidencial submeteu, mais tarde, ao Conselho Constitucional (CC), por considerar então 
              que o Ministério da Justiça, Assuntos Constitucionais e Religioso não respondeu no prazo legal 
              ao pedido para a constituição da formação partidária.
            </p>

            <p>
              Num ofício do ministério, assinado pelo ministro Mateus Saíze, com data de 28 de maio e que a Lusa 
              noticiou nessa altura, era referido que o termo "Anamalala", proposta de acrónimo de Aliança Nacional 
              para um Moçambique Livre e Autónomo, é proveniente da língua macua, falada em Nampula, norte do país, 
              "e por isso já carrega um significado linguístico para a comunicação dos que nela se expressam".
            </p>

            <p>
              O ministério deu um prazo de 30 dias para a alteração da sigla, contando desde a divulgação 
              daquele documento pela instituição da justiça moçambicana.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Promover o desenvolvimento sustentável de Moçambique através de políticas 
                inclusivas, democráticas e transparentes, trabalhando para melhorar a 
                qualidade de vida de todos os moçambicanos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser um partido político de referência em Moçambique, reconhecido pela 
                sua contribuição para o desenvolvimento nacional e pela promoção de 
                valores democráticos e de justiça social.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Significado de ANAMOLA
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🏛️</div>
            <h3 className="text-3xl font-bold mb-4">
              Aliança Nacional para um Moçambique Livre e Autónomo
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              O nome ANAMOLA representa nosso compromisso com a unidade nacional, 
              a liberdade e a autonomia do povo moçambicano.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
