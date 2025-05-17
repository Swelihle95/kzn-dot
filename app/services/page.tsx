import Image from "next/image"
import {
  ChevronRight,
  FileText,
  Car,
  Bus,
  Truck,
  AlertTriangle,
  MapPin,
  CreditCard,
  HelpCircle,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#58595B] mb-2">Our Services</h1>
        <p className="text-gray-600 max-w-3xl">
          The KwaZulu-Natal Department of Transport provides a wide range of services to citizens, businesses, and
          visitors to the province. Explore our services below.
        </p>
      </div>

      <Tabs defaultValue="individual" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="individual">For Individuals</TabsTrigger>
          <TabsTrigger value="business">For Businesses</TabsTrigger>
        </TabsList>

        <TabsContent value="individual">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-[#00A651]">
              <CardHeader>
                <div className="bg-[#00A651]/10 p-3 rounded-full w-fit mb-4">
                  <Car className="h-6 w-6 text-[#00A651]" />
                </div>
                <CardTitle>Driver's Licensing</CardTitle>
                <CardDescription>
                  Everything you need to know about obtaining, renewing, or updating your driver's license.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>Learner's License Applications</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>Driver's License Testing</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>License Renewals</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>International Driving Permits</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#00A651] hover:bg-[#00A651]/90">View Details</Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-[#0072BC]">
              <CardHeader>
                <div className="bg-[#0072BC]/10 p-3 rounded-full w-fit mb-4">
                  <Bus className="h-6 w-6 text-[#0072BC]" />
                </div>
                <CardTitle>Public Transport</CardTitle>
                <CardDescription>
                  Information about public transport options, routes, and schedules across the province.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Bus Routes & Schedules</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Taxi Services Information</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Fare Information</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Accessibility Services</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0072BC] hover:bg-[#0072BC]/90">View Details</Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-[#FFC72C]">
              <CardHeader>
                <div className="bg-[#FFC72C]/10 p-3 rounded-full w-fit mb-4">
                  <AlertTriangle className="h-6 w-6 text-[#FFC72C]" />
                </div>
                <CardTitle>Road Safety</CardTitle>
                <CardDescription>
                  Learn about road safety initiatives, regulations, and how to stay safe on our roads.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#FFC72C] mr-2" />
                    <span>Road Safety Tips</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#FFC72C] mr-2" />
                    <span>Traffic Rules & Regulations</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#FFC72C] mr-2" />
                    <span>Accident Reporting</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#FFC72C] mr-2" />
                    <span>Educational Programs</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#FFC72C] hover:bg-[#FFC72C]/90 text-[#58595B]">View Details</Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-[#58595B]">
              <CardHeader>
                <div className="bg-[#58595B]/10 p-3 rounded-full w-fit mb-4">
                  <FileText className="h-6 w-6 text-[#58595B]" />
                </div>
                <CardTitle>Vehicle Registration</CardTitle>
                <CardDescription>
                  Information about registering, transferring, and maintaining your vehicle documentation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#58595B] mr-2" />
                    <span>New Vehicle Registration</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#58595B] mr-2" />
                    <span>License Disc Renewals</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#58595B] mr-2" />
                    <span>Change of Ownership</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#58595B] mr-2" />
                    <span>Special Registration Numbers</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#58595B] hover:bg-[#58595B]/90">View Details</Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-[#00A651]">
              <CardHeader>
                <div className="bg-[#00A651]/10 p-3 rounded-full w-fit mb-4">
                  <MapPin className="h-6 w-6 text-[#00A651]" />
                </div>
                <CardTitle>Road Conditions & Maps</CardTitle>
                <CardDescription>
                  Get information about current road conditions, closures, and maps of the province.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>Road Condition Reports</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>Construction & Closures</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>Provincial Road Maps</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>Traffic Updates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#00A651] hover:bg-[#00A651]/90">View Details</Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-[#0072BC]">
              <CardHeader>
                <div className="bg-[#0072BC]/10 p-3 rounded-full w-fit mb-4">
                  <CreditCard className="h-6 w-6 text-[#0072BC]" />
                </div>
                <CardTitle>Fines & Payments</CardTitle>
                <CardDescription>
                  Information about traffic fines, payment options, and dispute procedures.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Check Outstanding Fines</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Payment Methods</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Dispute Process</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Fine Reduction Applications</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0072BC] hover:bg-[#0072BC]/90">View Details</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="business">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-[#00A651]">
              <CardHeader>
                <div className="bg-[#00A651]/10 p-3 rounded-full w-fit mb-4">
                  <Truck className="h-6 w-6 text-[#00A651]" />
                </div>
                <CardTitle>Commercial Vehicle Licensing</CardTitle>
                <CardDescription>
                  Information about licensing and permits for commercial vehicles and operators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>Operator Cards</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>Commercial Vehicle Registration</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>Abnormal Load Permits</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#00A651] mr-2" />
                    <span>Cross-Border Permits</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#00A651] hover:bg-[#00A651]/90">View Details</Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-[#0072BC]">
              <CardHeader>
                <div className="bg-[#0072BC]/10 p-3 rounded-full w-fit mb-4">
                  <Bus className="h-6 w-6 text-[#0072BC]" />
                </div>
                <CardTitle>Public Transport Operations</CardTitle>
                <CardDescription>
                  Information for public transport operators, including licensing and regulations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Operating Licenses</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Route Allocations</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Regulatory Compliance</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#0072BC] mr-2" />
                    <span>Vehicle Inspections</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0072BC] hover:bg-[#0072BC]/90">View Details</Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-[#FFC72C]">
              <CardHeader>
                <div className="bg-[#FFC72C]/10 p-3 rounded-full w-fit mb-4">
                  <FileText className="h-6 w-6 text-[#FFC72C]" />
                </div>
                <CardTitle>Tenders & Procurement</CardTitle>
                <CardDescription>
                  Information about current tenders, procurement processes, and supplier registration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#FFC72C] mr-2" />
                    <span>Current Tenders</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#FFC72C] mr-2" />
                    <span>Supplier Registration</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#FFC72C] mr-2" />
                    <span>Procurement Policies</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#FFC72C] mr-2" />
                    <span>B-BBEE Requirements</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#FFC72C] hover:bg-[#FFC72C]/90 text-[#58595B]">View Details</Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-[#58595B]">
              <CardHeader>
                <div className="bg-[#58595B]/10 p-3 rounded-full w-fit mb-4">
                  <HelpCircle className="h-6 w-6 text-[#58595B]" />
                </div>
                <CardTitle>Business Support</CardTitle>
                <CardDescription>
                  Support services and resources for transport-related businesses in the province.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#58595B] mr-2" />
                    <span>Business Development</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#58595B] mr-2" />
                    <span>Compliance Assistance</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#58595B] mr-2" />
                    <span>Industry Training</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-[#58595B] mr-2" />
                    <span>Funding Opportunities</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#58595B] hover:bg-[#58595B]/90">View Details</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-[#0072BC]/5 rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold text-[#58595B] mb-4">Service Centers</h2>
            <p className="text-gray-600 mb-4">
              Visit one of our service centers across KwaZulu-Natal for in-person assistance with licensing,
              registration, and other transport services.
            </p>
            <Button className="bg-[#00A651] hover:bg-[#00A651]/90">Find a Service Center</Button>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="KZN Transport Service Center"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#58595B] mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-semibold text-lg mb-2 text-[#58595B]">How do I renew my driver's license?</h3>
            <p className="text-gray-600">
              You can renew your driver's license at any licensing department in the province. Bring your ID, proof of
              residence, and the renewal fee. It's recommended to apply 4-6 weeks before expiry.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-semibold text-lg mb-2 text-[#58595B]">
              What documents do I need for vehicle registration?
            </h3>
            <p className="text-gray-600">
              For new vehicle registration, you'll need your ID, proof of residence, proof of purchase, and the
              vehicle's certificate of compliance. Additional documents may be required for specific cases.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-semibold text-lg mb-2 text-[#58595B]">
              How can I check if I have outstanding traffic fines?
            </h3>
            <p className="text-gray-600">
              You can check for outstanding traffic fines by visiting any traffic department with your ID, or by using
              our online fine checking service on this website.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-semibold text-lg mb-2 text-[#58595B]">
              How do I apply for a public transport operating license?
            </h3>
            <p className="text-gray-600">
              Applications for public transport operating licenses must be submitted to the Provincial Regulatory
              Entity. The application requires details of routes, vehicle specifications, and compliance with safety
              regulations.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="border-[#0072BC] text-[#0072BC]">
            View All FAQs
          </Button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0072BC] to-[#00A651] text-white rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our customer service team is available to help you with any questions or concerns about our services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-[#0072BC] hover:bg-gray-100">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
            <Button className="bg-[#FFC72C] text-[#58595B] hover:bg-[#FFC72C]/90">
              <HelpCircle className="h-4 w-4 mr-2" />
              Service Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
