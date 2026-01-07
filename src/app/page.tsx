'use client'

import { useState, useEffect } from 'react'
import { Check, Phone, Mail, Instagram, MessageCircle } from 'lucide-react'

export default function Home() {
  const [selectedInvestment, setSelectedInvestment] = useState<number | null>(null)
  const [showPopup, setShowPopup] = useState(false)
  const [showSimulator, setShowSimulator] = useState(false)
  const [formData, setFormData] = useState({
    valorInvestimento: '',
    nomeCompleto: '',
    cpf: '',
    rg: '',
    endereco: '',
    cep: '',
    email: '',
    telefone: '',
    regiao: '',
    investiuAntes: '',
    indicante: '',
    parente1Nome: '',
    parente1Parentesco: '',
    parente1Telefone: '',
    parente2Nome: '',
    parente2Parentesco: '',
    parente2Telefone: '',
    parente3Nome: '',
    parente3Parentesco: '',
    parente3Telefone: '',
  })

  const investments = {
    1000: { monthly: 100, eighth: 1100, total: 1800, profit: 800 },
    2000: { monthly: 200, eighth: 2200, total: 3600, profit: 1600 },
    3000: { monthly: 300, eighth: 3300, total: 5400, profit: 2400 },
    4000: { monthly: 400, eighth: 4400, total: 7200, profit: 3200 },
    5000: { monthly: 500, eighth: 5500, total: 9000, profit: 4000 },
  }

  const testimonials = [
    { name: 'Vinícius L.', text: 'Investi e recebi tudo certinho. Atendimento transparente e objetivo.' },
    { name: 'Marcos S.', text: 'Pagamento caiu em menos de 1 hora! Recomendo demais.' },
    { name: 'Daniela R.', text: 'Meu dinheiro não fica parado. Já estou no segundo ciclo!' },
    { name: 'Ricardo M.', text: 'Confiei e valeu a pena. Atendimento sempre disponível.' },
    { name: 'Simone P.', text: 'Segurança e retorno mensal. Melhor decisão que tomei.' },
    { name: 'Everton F.', text: 'Indiquei minha irmã e ambos recebemos! ILDC é seriedade.' },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 8000)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `*NOVO INVESTIDOR - INSTITUTO LEÃO DE CRÉDITO*

*VALOR QUE DESEJA INVESTIR:* ${formData.valorInvestimento}

*DADOS PESSOAIS:*
Nome: ${formData.nomeCompleto}
CPF: ${formData.cpf}
RG: ${formData.rg}
Endereço: ${formData.endereco}
CEP: ${formData.cep}
E-mail: ${formData.email}
Telefone/WhatsApp: ${formData.telefone}
Região: ${formData.regiao}
Já investiu antes: ${formData.investiuAntes}
Indicante: ${formData.indicante || 'Nenhum'}

*CONTATOS DE PARENTES:*
1. ${formData.parente1Nome} (${formData.parente1Parentesco}) - ${formData.parente1Telefone}
2. ${formData.parente2Nome} (${formData.parente2Parentesco}) - ${formData.parente2Telefone}
3. ${formData.parente3Nome} (${formData.parente3Parentesco}) - ${formData.parente3Telefone}`

    const whatsappUrl = `https://wa.me/5511951781791?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Popup */}
      {showPopup && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-6 py-4 rounded-lg shadow-2xl animate-in slide-in-from-top duration-500">
          <p className="font-bold text-sm">🔥 102 pessoas visitaram este site nas últimas 48 horas.</p>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black"></div>
        <img 
          src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f7d5f5e1-1ddc-4a7f-85d0-d17f3e313aae.jpg" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e670f2f1-0af7-4f99-8bc5-404e9b714a13.jpg" 
            alt="Instituto Leão de Crédito" 
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 rounded-full border-4 border-yellow-500 shadow-2xl"
          />
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            INSTITUTO LEÃO DE CRÉDITO
          </h1>
          
          <div className="space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed mb-12">
            <p className="text-yellow-400 font-bold">
              🔥 Ou você faz o seu dinheiro trabalhar… ou alguém ficará rico com o seu dinheiro parado. Escolha de qual lado você quer estar.
            </p>
            
            <p className="text-gray-300">
              Tem gente que olha o dinheiro na conta e acha que está seguro.<br />
              Seguro pra quem?<br />
              — Pra você?<br />
              — Ou para o banco, que usa esse mesmo dinheiro para lucrar enquanto te paga migalhas?
            </p>
            
            <p className="text-emerald-400 font-semibold">
              Aqui no <span className="text-yellow-400">Instituto Leão de Crédito</span>, o jogo é outro.<br />
              Aqui você não apenas observa — você participa.
            </p>
            
            <p className="text-gray-200">
              Ao investir a partir de <span className="text-yellow-400 font-bold">R$ 1.000</span>, seu capital passa a girar dentro das nossas operações, possibilitando rentabilidade de <span className="text-emerald-400 font-bold">até 80%</span> conforme o desempenho real das atividades.
            </p>
            
            <p className="text-xl sm:text-2xl font-bold text-yellow-400">
              É simples: dinheiro parado perde valor — dinheiro em movimento cresce.<br />
              Quem investe se posiciona onde o lucro acontece.
            </p>
          </div>
        </div>
      </section>

      {/* Tabela de Simulação */}
      <section className="py-20 bg-gradient-to-b from-black to-emerald-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-400">
            📊 Simulação de Participação nos Resultados
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Ciclo de 8 Meses - Os valores abaixo representam uma simulação baseada no desempenho médio histórico das operações, podendo variar conforme a performance real do mercado e das atividades da empresa. O capital investido é devolvido no último mês do ciclo.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
                  <th className="p-4 text-left font-bold">Valor investido</th>
                  <th className="p-4 text-left font-bold">Pagamento Mensal (Meses 1 a 7)</th>
                  <th className="p-4 text-left font-bold">Pagamento no 8º mês</th>
                  <th className="p-4 text-left font-bold">Total recebido em 8 meses</th>
                  <th className="p-4 text-left font-bold">Lucro total estimado</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(investments).map(([amount, data]) => (
                  <tr key={amount} className="border-b border-yellow-900/30 hover:bg-yellow-900/10 transition-colors">
                    <td className="p-4 text-yellow-400 font-bold">{formatCurrency(Number(amount))}</td>
                    <td className="p-4 text-emerald-400">{formatCurrency(data.monthly)}</td>
                    <td className="p-4 text-emerald-400">{formatCurrency(data.eighth)}</td>
                    <td className="p-4 text-white font-bold">{formatCurrency(data.total)}</td>
                    <td className="p-4 text-yellow-400 font-bold">{formatCurrency(data.profit)} (80%)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Simulador */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-yellow-400">
            🧮 Simulador de Investimento
          </h2>
          
          <button
            onClick={() => setShowSimulator(!showSimulator)}
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-2xl mb-8"
          >
            Consultar Investimentos
          </button>

          {showSimulator && (
            <div className="mt-8 space-y-6 animate-in fade-in duration-500">
              <div className="flex flex-wrap justify-center gap-4">
                {Object.keys(investments).map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedInvestment(Number(amount))}
                    className={`px-6 py-3 rounded-lg font-bold text-lg transition-all ${
                      selectedInvestment === Number(amount)
                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black scale-110'
                        : 'bg-emerald-900/50 text-white hover:bg-emerald-800/50'
                    }`}
                  >
                    {formatCurrency(Number(amount))}
                  </button>
                ))}
              </div>

              {selectedInvestment && (
                <div className="bg-gradient-to-br from-emerald-900/30 to-black border-2 border-yellow-500 rounded-xl p-8 mt-8 animate-in slide-in-from-bottom duration-500">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                    Resultado para {formatCurrency(selectedInvestment)}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                    <div className="bg-black/50 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm mb-1">Pagamento Mensal (Meses 1-7)</p>
                      <p className="text-2xl font-bold text-emerald-400">
                        {formatCurrency(investments[selectedInvestment as keyof typeof investments].monthly)}
                      </p>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm mb-1">Pagamento no 8º Mês</p>
                      <p className="text-2xl font-bold text-emerald-400">
                        {formatCurrency(investments[selectedInvestment as keyof typeof investments].eighth)}
                      </p>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm mb-1">Total Recebido no Ciclo</p>
                      <p className="text-2xl font-bold text-white">
                        {formatCurrency(investments[selectedInvestment as keyof typeof investments].total)}
                      </p>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm mb-1">Lucro Estimado</p>
                      <p className="text-2xl font-bold text-yellow-400">
                        {formatCurrency(investments[selectedInvestment as keyof typeof investments].profit)} (80%)
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Explicação */}
      <section className="py-20 bg-gradient-to-b from-emerald-950/30 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-yellow-400">
            📌 Como Funciona
          </h2>
          <div className="bg-black/50 backdrop-blur-sm border-2 border-emerald-600 rounded-xl p-8 space-y-4 text-lg">
            <p className="text-gray-200">
              O investidor recebe <span className="text-emerald-400 font-bold">7 pagamentos mensais fixos.</span>
            </p>
            <p className="text-gray-200">
              No <span className="text-yellow-400 font-bold">8º mês</span>, recebe:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
              <li>O mesmo pagamento mensal</li>
              <li className="text-emerald-400 font-bold">Devolução integral do aporte</li>
            </ul>
            <p className="text-gray-200">
              O valor total ao final dos 8 meses pode representar <span className="text-yellow-400 font-bold">até 80% de participação nos resultados</span>, conforme desempenho operacional.
            </p>
          </div>
        </div>
      </section>

      {/* Texto Persuasivo */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-200">
          <p className="text-xl text-emerald-400 font-semibold">
            🦁 Quem entra agora participa das operações em andamento e já começa a receber no próximo ciclo.
          </p>
          <p>
            Seu investimento gira dentro do nosso fluxo de crédito, e os retornos mensais refletem sua participação direta nos resultados — <span className="text-yellow-400 font-bold">sem que você precise fazer nada além de investir e acompanhar.</span>
          </p>
          <p>
            Enquanto muitos deixam o dinheiro parado perdendo valor, você recebe mensalmente e ainda recupera o capital ao final do ciclo.
          </p>
          <p className="text-sm text-gray-400 italic">
            Todas as informações acima são mantidas sob sigilo e segurança interna do ILDC.
          </p>
          <p className="text-center text-yellow-400 font-bold text-xl">
            Contamos com sua pontualidade e compromisso.<br />
            Agradecemos pela confiança!
          </p>
          <p className="text-center text-emerald-400">
            📲 <span className="font-bold">Dúvidas? Fale com nossa equipe:</span> Instituto Leão de Crédito — Compromisso com você.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section id="formulario" className="py-20 bg-gradient-to-b from-black to-emerald-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">
            📝 Dados para Contato
          </h2>
          
          <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-sm border-2 border-yellow-500 rounded-xl p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Dados Pessoais</h3>
              
              <div className="bg-yellow-500/10 border border-yellow-500 rounded-lg p-4">
                <label className="block text-yellow-400 font-semibold mb-2">
                  Valor que deseja investir *
                </label>
                <select
                  name="valorInvestimento"
                  required
                  value={formData.valorInvestimento}
                  onChange={handleInputChange}
                  className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="">Selecione o valor</option>
                  <option value="R$ 1.000,00">R$ 1.000,00</option>
                  <option value="R$ 2.000,00">R$ 2.000,00</option>
                  <option value="R$ 3.000,00">R$ 3.000,00</option>
                  <option value="R$ 4.000,00">R$ 4.000,00</option>
                  <option value="R$ 5.000,00">R$ 5.000,00</option>
                </select>
              </div>
              
              <input
                type="text"
                name="nomeCompleto"
                placeholder="Nome completo *"
                required
                value={formData.nomeCompleto}
                onChange={handleInputChange}
                className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="cpf"
                  placeholder="CPF *"
                  required
                  value={formData.cpf}
                  onChange={handleInputChange}
                  className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <input
                  type="text"
                  name="rg"
                  placeholder="RG *"
                  required
                  value={formData.rg}
                  onChange={handleInputChange}
                  className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              
              <input
                type="text"
                name="endereco"
                placeholder="Endereço completo *"
                required
                value={formData.endereco}
                onChange={handleInputChange}
                className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              
              <input
                type="text"
                name="cep"
                placeholder="CEP *"
                required
                value={formData.cep}
                onChange={handleInputChange}
                className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail *"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone / WhatsApp *"
                  required
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              
              <input
                type="text"
                name="regiao"
                placeholder="De qual região você é? *"
                required
                value={formData.regiao}
                onChange={handleInputChange}
                className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              
              <input
                type="text"
                name="investiuAntes"
                placeholder="Você já investiu antes? Onde? *"
                required
                value={formData.investiuAntes}
                onChange={handleInputChange}
                className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              
              <input
                type="text"
                name="indicante"
                placeholder="Alguém indicou você ao ILDC? Se sim, nome do indicante"
                value={formData.indicante}
                onChange={handleInputChange}
                className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div className="space-y-4 pt-6 border-t border-yellow-600">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Contato de 3 Parentes</h3>
              
              {[1, 2, 3].map((num) => (
                <div key={num} className="space-y-3 p-4 bg-black/30 rounded-lg">
                  <p className="text-yellow-400 font-semibold">Parente {num}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      name={`parente${num}Nome`}
                      placeholder="Nome *"
                      required
                      value={formData[`parente${num}Nome` as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                    <input
                      type="text"
                      name={`parente${num}Parentesco`}
                      placeholder="Parentesco *"
                      required
                      value={formData[`parente${num}Parentesco` as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                    <input
                      type="tel"
                      name={`parente${num}Telefone`}
                      placeholder="Telefone *"
                      required
                      value={formData[`parente${num}Telefone` as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full bg-black/70 border border-yellow-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
            >
              Enviar para WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">
            💬 O Que Nossos Investidores Dizem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-900/30 to-black border border-yellow-600 rounded-xl p-6 hover:scale-105 transition-transform"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Check className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-yellow-400 font-bold mb-2">{testimonial.name}</p>
                    <p className="text-gray-300 text-sm">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-emerald-950 py-12 border-t border-yellow-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">📞 Meios de Contato</h3>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
              <a href="mailto:institutoleaodecreditos@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Mail className="w-5 h-5" />
                institutoleaodecreditos@gmail.com
              </a>
              <a href="https://wa.me/5511951781791" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />
                +55 11 95178-1791
              </a>
              <a href="https://instagram.com/instituto_leaodecredito" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
                @instituto_leaodecredito
              </a>
            </div>
            
            <p className="text-xl text-emerald-400 font-bold">
              🦁 Aqui o seu dinheiro não dorme — ele trabalha por você.
            </p>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Fixo */}
      <a
        href="https://wa.me/5511951781791"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  )
}
