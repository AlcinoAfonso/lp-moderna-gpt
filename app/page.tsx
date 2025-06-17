import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* Outros componentes virão depois */}
      </main>
    </div>
  )
}
