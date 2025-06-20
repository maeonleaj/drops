"use client"

import { useEffect } from 'react'
import VideoPlayer from '@/components/VideoPlayer'

export default function Home() {
    useEffect(() => {
        // Mobile menu toggle
        const btn = document.getElementById("menu-btn");
        const menu = document.getElementById("menu");
      
        if (btn && menu) {
          btn.addEventListener("click", function () {
            menu.classList.toggle("hidden");
          });
        }

        // Initialize video players
        const createScript = (id: string) => {
          const s = document.createElement("script");
          s.src = "https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js";
          s.setAttribute("data-id", id);
          s.async = true;
          document.head.appendChild(s);
        };

        createScript("684f725e963d10368ab243c7");
        createScript("684f71e59a50d8576c68a664");
      
        return () => {
          // Cleanup scripts on unmount
          const scripts = document.querySelectorAll('script[data-id]');
          scripts.forEach(script => script.remove());
        };
      }, []);
      

  return (
    <main className="bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a className="text-2xl font-extrabold text-[#5260df] tracking-wide" href="#hero">
            DROP<span className="text-[#5260df]">S</span>
          </a>
          <ul className="hidden md:flex space-x-8 font-semibold text-gray-700">
            <li>
              <a className="hover:text-green-500 transition" href="#dor-publico">Problema</a>
            </li>
            <li>
              <a className="hover:text-green-500 transition" href="#produto">Solução</a>
            </li>
            <li>
              <a className="hover:text-green-500 transition" href="#depoimentos">Depoimentos</a>
            </li>
            <li>
              <a className="hover:text-green-500 transition" href="#bonus-oferta">Oferta</a>
            </li>
          </ul>
          <button className="md:hidden focus:outline-none" id="menu-btn">
            <i className="fas fa-bars text-2xl text-gray-700"></i>
          </button>
        </div>
        {/* Mobile menu */}
        <div className="hidden md:hidden bg-white shadow-lg" id="menu">
          <ul className="flex flex-col p-4 space-y-4 font-semibold text-gray-700">
            <li>
              <a className="hover:text-green-500 transition" href="#dor-publico">Problema</a>
            </li>
            <li>
              <a className="hover:text-green-500 transition" href="#produto">Solução</a>
            </li>
            <li>
              <a className="hover:text-green-500 transition" href="#depoimentos">Depoimentos</a>
            </li>
            <li>
              <a className="hover:text-green-500 transition" href="#bonus-oferta">Oferta</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-[#5260df] to-[#5260df] text-white min-h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden" id="hero">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#5260df] to-white"></div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 pt-20 md:pt-0">
          <div className="md:w-1/2 space-y-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Te incomoda o fato de não respirar bem?
            </h1>
            <p className="text-lg md:text-xl font-semibold drop-shadow-md">
              <span className="font-extrabold text-yellow-400 animate-pulse">Sinta o efeito desde a primeira gota.</span> Feito com ingredientes selecionados, para oferecer uma experiência que complementa sua jornada de bem-estar. Cada dose proporciona uma sensação revigorante, ajudando você a se sentir energizado e pronto para encarar o dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a aria-label="Melhorar minha respiração agora" 
                className="group bg-[#5260df] hover:bg-[#6b76f1] transition-all duration-300 text-white font-bold py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-3 text-lg transform hover:scale-105 hover:-rotate-1"
                href="#bonus-oferta">
                <i className="fas fa-star group-hover:animate-spin"></i>
                Quero Respirar Melhor
              </a>
            </div>
            {/* Floating Elements */}
            <div className="absolute -bottom-4 -left-19 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
          <div className="md:w-1/2 flex justify-center relative z-10">
            <img alt="Pessoa respirando fundo ao ar livre" 
              className="rounded-xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-500" 
              height="400" loading="lazy" 
              src="https://st4.depositphotos.com/1809585/31058/i/450/depositphotos_310582612-stock-photo-relaxed-adult-man-breathing-fresh.jpg" 
              width="400"/>
          </div>
        </div>
      </section>

      {/* Dor do Público Section */}
      <section className="bg-white py-16" id="dor-publico">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#5260df] mb-8">Não é só "nariz entupido"</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Se você vive cansado, dorme mal ou acorda com a sensação de que o ar não entra direito, isso não é normal.
              </p>
              <p className="text-lg text-gray-700">
                Mas também não é culpa sua. A maioria das soluções atuais só alivia momentaneamente, como por exemplo nosso amigo <span className="text-red-600 font-semibold">Neosoro</span>, que além de viciar, esse produto pode desencadear uma série de sintomas que comprometem sua disposição, aumentam o estresse e afetam sua qualidade de vida.
              </p>
            </div>
            <img alt="Ilustração do problema respiratório" className="rounded-xl shadow-lg" height="300" loading="lazy" src="https://panoramafarmaceutico.com.br/wp-content/uploads/2022/09/Causas-e-tratamento-em-caso-de-acordar-cansado.jpg" width="500"/>
          </div>
        </div>
      </section>

      {/* Produto Section */}
      <section className="bg-gray-100 py-16 relative" id="produto">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-8 text-center" style={{ color: '#5260df' }}>
            Conheça o Drop<span style={{ color: '#5260df' }}>s</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img alt="RespiraFácil produto" className="rounded-xl shadow-lg" height="300" loading="lazy" src="https://i.imgur.com/St03hpf.png" width="500"/>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Um produto natural criado para ajudar a restaurar sua respiração de forma imediata.
              </p>
              <p className="text-lg text-gray-700">
              Drops é 100% vegano, livre de substâncias artificiais e adoçado naturalmente usando a dosagem recomendada são 4 meses de durabilidade.
              </p>
              <div className="mt-6 space-y-4 text-gray-700">
                <p><strong>Formula secreta:</strong> Combinamos óleos essenciais extraídos de ervas e plantas selecionadas para criar uma fórmula poderosa.</p>
                <p><strong>Conteúdo:</strong> 30ml</p>
                <p><strong>Modo de uso:</strong> Tomar 2 gotas por dia</p>
              </div>
            </div>
          </div>
        </div>
        {/* Floating WhatsApp Button */}
        <a
  href="https://wa.me/5521965305422"
  target="_blank"
  aria-label="Talk to a human attendant"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-full shadow-md flex items-center gap-2 z-50 transition transform hover:scale-105 text-sm"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.64 6.12L0 24l5.88-1.56A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5a9.5 9.5 0 01-4.84-1.38l-.35-.22-3.5.93.93-3.5-.22-.35A9.5 9.5 0 1121.5 12 9.5 9.5 0 0112 21.5zm5.3-7.1c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.6-.48-.52-.68-.53-.18-.01-.38-.01-.58-.01-.2 0-.52.07-.8.37-.28.3-1.07 1.05-1.07 2.55 0 1.5 1.1 2.95 1.25 3.15.15.2 2.15 3.3 5.2 4.62.73.32 1.3.51 1.75.65.74.23 1.42.2 1.96.12.6-.1 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.28-.2-.58-.35z"/>
  </svg>
  <span></span>
</a>
      </section>

      {/* Video Testimonial Section */}
      <section className="bg-gradient-to-r text-[#5260df] to-white py-16" id="depoimentos">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-[#5260df] text-center mb-12">Depoimentos Reais</h2>
          <VideoPlayer />
        </div>
      </section>

      {/* Diferenciais Section */}
<section className="bg-white py-16" id="diferenciais">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-[#5260df] text-center mb-12">Resultados Reais, Sem Complicações</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {[
        { title: "Uso Diário", desc: "Fórmula desenvolvida para o uso diário" },
        { title: "Eficácia", desc: "Atua na causa do desconforto respiratório" },
        { title: "Segurança", desc: "Sem dependência química ou efeito rebote" }
      ].map((item, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <span className="inline-flex items-center justify-center bg-[#5260df] rounded-full w-12 h-12 mb-4">
            <img src="https://i.imgur.com/SQrEaFP.png" alt="Ícone" className="w-6 h-6" />
          </span>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* Como Funciona Section */}
<section className="bg-gray-100 py-16" id="como-funciona">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-[#5260df] text-center mb-12">Como funciona o Potencializador</h2>
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Detecção instantânea */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
        <span className="inline-flex items-center justify-center bg-[#5260df] rounded-full w-12 h-12 mb-4">
          <img src="https://i.imgur.com/SQrEaFP.png" alt="Ícone" className="w-6 h-6" />
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Detecção instantânea</h3>
        <p className="text-gray-600">
          Ao entrar em contato com a língua, os princípios ativos do Nordica Drops - como a Mentha arvensis L. e o mentol natural - são rapidamente absorvidos pelas mucosas, enviando um sinal imediato ao sistema nervoso central.
        </p>
      </div>
      
      {/* Resposta cerebral e corporal */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
        <span className="inline-flex items-center justify-center bg-[#5260df] rounded-full w-12 h-12 mb-4">
          <img src="https://i.imgur.com/SQrEaFP.png" alt="Ícone" className="w-6 h-6" />
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Resposta cerebral e corporal</h3>
        <p className="text-gray-600">
          Em segundos, o mentol ativa os receptores TRPM8 - responsáveis pela sensação de frescor e abertura das vias respiratórias. Ao mesmo tempo, os triglicerídeos de cadeia média (TCM) entram em ação como combustível cerebral, enquanto as vitaminas D, E e A ajudam a equilibrar funções neurológicas, imunológicas e antioxidantes.
        </p>
      </div>
      
      {/* Efeito imediato */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
        <span className="inline-flex items-center justify-center bg-[#5260df] rounded-full w-12 h-12 mb-4">
          <img src="https://i.imgur.com/SQrEaFP.png" alt="Ícone" className="w-6 h-6" />
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Efeito imediato</h3>
        <p className="text-gray-600">
          O resultado é um verdadeiro "baque de foco": Respiração profunda e desobstruída - Clareza mental - Energia limpa e duradoura - Sensação de alerta e leveza, sem o colapso dos estimulantes tradicionais.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Bonus e Oferta Section */}
      <section className="py-20 bg-gradient-to-r from-[#5260df] to-blue-900 text-white" id="bonus-oferta">
        <div className="max-w-4xl mx-auto px-6">
          {/* Bonus Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16 transform hover:scale-105 transition-transform">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4">🎁</span>
              <h3 className="text-3xl font-bold mb-4">Bônus Exclusivo</h3>
              <p className="text-xl text-center">
                Guia Digital 7 Dias para Respirar Melhor – Um plano simples com hábitos diários para limpar as vias aéreas, relaxar e melhorar o sono. Potencializando o Drops
              </p>
            </div>
          </div>
          
          {/* Offer Box */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-5xl font-extrabold mb-8">Oferta Especial</h2>
            <div className="bg-white/20 rounded-xl p-8 mb-8">
              <p className="text-2xl mb-2">De <span className="line-through opacity-75">R$365,70</span></p>
              <p className="text-5xl font-bold mb-2">Por apenas</p>
              <p className="text-7xl font-black text-yellow-400 mb-4">R$269</p>
              <p className="text-lg opacity-75">Preço promocional por tempo limitado. </p> <span className="font-extrabold text-yellow-400 animate-pulse">4 MESES DE DURABILIDADE.</span>
            </div>
            
            <a aria-label="Comprar o RespiraFácil" 
              className="bg-[#5260df] hover:bg-[#6b76f1] text-white text-xl font-extrabold py-6 px-12 rounded-xl shadow-2xl inline-block transition-all transform hover:scale-105 hover:rotate-1" 
              href="#purchase">
              EU QUERO MELHORAR MINHA RESPIRAÇÃO
            </a>
            
            <p className="mt-8 text-sm opacity-75">
              * Garantia de Satisfação ou o seu dinheiro de volta.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Drops</h4>
              <p className="text-sm text-gray-300">
                Transformando vidas através da respiração natural.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <p className="text-sm text-gray-300">
              dropssuporte@outlook.com<br/>
                Segunda a Sexta, 9h-18h
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center space-y-4">
            <p className="text-sm text-gray-400">
              © 2024 DROPS. Todos os direitos reservados.
            </p>
            <div className="flex justify-center items-center gap-4">
            <img src="https://lh4.googleusercontent.com/proxy/Q_vf7vg0xl8sfufahdF0lqO5kdj4RiImiQ0Bu4Vk61D1HClxCW_ajnXgIpjjp8oXRJyo3BZb1qXENTZ99zH6_dhVYaIXLOfVdctQJmiyakhPcmVUbA" alt="Site Seguro" className="max-w-[200px]"/>
              <img src="https://vidaecasa.com.br/wp-content/uploads/2022/08/Selo-SiteSeguro-Vidaecasa.png.webp" alt="Site Seguro" className="max-w-[200px]"/>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
