import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Menu,
  ChevronRight,
  MapPin,
  FileText,
  Car,
  Bus,
  AlertTriangle,
  Phone,
  Calendar,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-[#58595B] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:underline">
              Contact Us
            </Link>
            <Link href="#" className="hover:underline">
              FAQ
            </Link>
            <Link href="#" className="hover:underline">
              Careers
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:underline">
              English
            </Link>
            <Link href="#" className="hover:underline">
              isiZulu
            </Link>
            <Link href="#" className="hover:underline">
              Afrikaans
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kwazulu-natal-transport-pvHvQv7QaFfMiVXaUkt8qEe3VlRKoF.png"
                alt="KwaZulu-Natal Department of Transport Logo"
                width={240}
                height={80}
                className="mr-8"
              />
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#" className="text-[#58595B] hover:text-[#00A651] font-medium">
                About Us
              </Link>
              <Link href="#" className="text-[#58595B] hover:text-[#00A651] font-medium">
                Services
              </Link>
              <Link href="#" className="text-[#58595B] hover:text-[#00A651] font-medium">
                Projects
              </Link>
              <Link href="#" className="text-[#58595B] hover:text-[#00A651] font-medium">
                News
              </Link>
              <Link href="#" className="text-[#58595B] hover:text-[#00A651] font-medium">
                Resources
              </Link>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 w-[200px] rounded-full border-gray-300 focus:border-[#00A651] focus:ring-[#00A651]"
                />
              </div>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="#" className="text-[#58595B] hover:text-[#00A651] font-medium py-2 border-b">
                    About Us
                  </Link>
                  <Link href="#" className="text-[#58595B] hover:text-[#00A651] font-medium py-2 border-b">
                    Services
                  </Link>
                  <Link href="#" className="text-[#58595B] hover:text-[#00A651] font-medium py-2 border-b">
                    Projects
                  </Link>
                  <Link href="#" className="text-[#58595B] hover:text-[#00A651] font-medium py-2 border-b">
                    News
                  </Link>
                  <Link href="#" className="text-[#58595B] hover:text-[#00A651] font-medium py-2 border-b">
                    Resources
                  </Link>
                  <div className="relative mt-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-10 w-full rounded-full border-gray-300"
                    />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-[#0072BC] text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0072BC]/90 to-[#00A651]/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 py-20 relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Moving KwaZulu-Natal Forward</h1>
              <p className="text-xl mb-8">
                Providing safe, reliable, and efficient transport infrastructure and services for all citizens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#00A651] hover:bg-[#00A651]/90 text-white">Our Services</Button>
                <Button variant="outline" className="bg-white text-[#0072BC] hover:bg-gray-100 border-white">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10 text-[#58595B]">Quick Access to Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="bg-[#00A651]/10 p-4 rounded-full mb-4">
                  <Car className="h-8 w-8 text-[#00A651]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#58595B]">Driver's Licensing</h3>
                <p className="text-gray-600 mb-4">Apply for or renew your driver's license</p>
                <Button variant="link" className="text-[#00A651] mt-auto">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="bg-[#0072BC]/10 p-4 rounded-full mb-4">
                  <Bus className="h-8 w-8 text-[#0072BC]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#58595B]">Public Transport</h3>
                <p className="text-gray-600 mb-4">Find routes, schedules and fare information</p>
                <Button variant="link" className="text-[#0072BC] mt-auto">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="bg-[#FFC72C]/10 p-4 rounded-full mb-4">
                  <AlertTriangle className="h-8 w-8 text-[#FFC72C]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#58595B]">Road Safety</h3>
                <p className="text-gray-600 mb-4">Road safety tips and traffic regulations</p>
                <Button variant="link" className="text-[#FFC72C] mt-auto">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="bg-[#58595B]/10 p-4 rounded-full mb-4">
                  <FileText className="h-8 w-8 text-[#58595B]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#58595B]">Forms & Documents</h3>
                <p className="text-gray-600 mb-4">Download forms and official documents</p>
                <Button variant="link" className="text-[#58595B] mt-auto">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* News & Announcements */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#58595B]">Latest News & Announcements</h2>
              <Button variant="link" className="text-[#00A651]">
                View All News <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>May 15, 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#58595B]">
                    Road Maintenance Schedule for Winter 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The Department announces its comprehensive road maintenance plan for the upcoming winter season.
                  </p>
                  <Button variant="link" className="text-[#00A651] p-0">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>May 10, 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#58595B]">
                    New Bus Routes Launched in Durban Metro Area
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Expanded public transport options now available with the introduction of 5 new bus routes.
                  </p>
                  <Button variant="link" className="text-[#00A651] p-0">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>May 5, 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#58595B]">
                    Road Safety Campaign Launches in Schools
                  </h3>
                  <p className="text-gray-600 mb-4">
                    New educational initiative aims to improve road safety awareness among school children.
                  </p>
                  <Button variant="link" className="text-[#00A651] p-0">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-12 bg-[#0072BC]/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10 text-[#58595B]">Major Transport Projects</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto bg-[url('/placeholder.svg?height=400&width=300')] bg-cover bg-center"></div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#58595B]">N3 Highway Expansion</h3>
                  <p className="text-gray-600 mb-4">
                    Major expansion of the N3 highway between Durban and Pietermaritzburg to reduce congestion and
                    improve safety.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#00A651]/10 text-[#00A651] text-xs font-medium px-2.5 py-0.5 rounded">
                      In Progress
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      2023-2026
                    </span>
                  </div>
                  <Button variant="outline" className="text-[#0072BC] border-[#0072BC]">
                    Project Details
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto bg-[url('/placeholder.svg?height=400&width=300')] bg-cover bg-center"></div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#58595B]">Durban Integrated Rapid Transit System</h3>
                  <p className="text-gray-600 mb-4">
                    Development of a modern, efficient public transport system to connect communities across the Durban
                    metropolitan area.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#FFC72C]/10 text-[#FFC72C] text-xs font-medium px-2.5 py-0.5 rounded">
                      Planning
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      2024-2028
                    </span>
                  </div>
                  <Button variant="outline" className="text-[#0072BC] border-[#0072BC]">
                    Project Details
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-[#00A651] hover:bg-[#00A651]/90 text-white">View All Projects</Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#0072BC] to-[#00A651] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Report Road Issues</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Help us maintain safe roads by reporting potholes, traffic light failures, or other road infrastructure
              issues.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-[#0072BC] hover:bg-gray-100">
                <Phone className="h-4 w-4 mr-2" />
                Call Hotline
              </Button>
              <Button className="bg-[#FFC72C] text-[#58595B] hover:bg-[#FFC72C]/90">
                <MapPin className="h-4 w-4 mr-2" />
                Report Online
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#58595B] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>172 Burger Street</li>
                <li>Pietermaritzburg, 3201</li>
                <li>Tel: 033 355 8600</li>
                <li>Email: info@kzntransport.gov.za</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    News & Media
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Forms & Documents
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Legislation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Tenders
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Reports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </Link>
              </div>
              <h3 className="text-lg font-semibold mb-4">Subscribe to Updates</h3>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-l-md rounded-r-none border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white"
                />
                <Button className="rounded-l-none bg-[#00A651]">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 KwaZulu-Natal Department of Transport. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Terms of Use
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
