
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplets, Users, Calendar, ArrowRight, Check } from "lucide-react";
import { BloodType } from "@/utils/types";
import { bloodInventory } from "@/utils/data";

const BloodTypeCard = ({ type, available, required }: { type: BloodType, available: number, required: number }) => {
  const percentage = Math.round((available / required) * 100);
  const isLow = percentage < 50;
  const isCritical = percentage < 25;
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 relative overflow-hidden">
      <span className={`absolute top-0 right-0 px-3 py-1 text-xs font-semibold ${
        isCritical ? 'bg-red-500 text-white' : 
        isLow ? 'bg-yellow-500 text-white' : 
        'bg-green-500 text-white'
      }`}>
        {isCritical ? 'Critical' : isLow ? 'Low' : 'Adequate'}
      </span>
      
      <h3 className={`text-3xl font-bold ${
        type.includes('O') ? 'text-green-600' : 
        type.includes('A') ? 'text-blue-600' :
        type.includes('B') ? 'text-yellow-600' :
        'text-purple-600'
      }`}>{type}</h3>
      
      <div className="mt-2">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Available</span>
          <span className="font-medium">{available} units</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${
              isCritical ? 'bg-red-500' : 
              isLow ? 'bg-yellow-500' : 
              'bg-green-500'
            }`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">{percentage}% of required</p>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Donate Blood, <span className="text-primary">Save Lives</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Our modern blood bank management system connects donors with those in need.
                Join our network of heroes and help save lives today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="font-medium">
                  <Link to="/register">Become a Donor</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-medium">
                  <Link to="/donors">Search Donors</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 absolute rounded-full bg-primary/10 animate-pulse-subtle"></div>
                <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 blood-pulse">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path 
                      fill="#e53e3e" 
                      d="M100,15 C130,15 155,40 155,70 C155,95 140,115 115,140 C105,150 105,155 100,175 C95,155 95,150 85,140 C60,115 45,95 45,70 C45,40 70,15 100,15 Z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Making a Difference Together</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our blood bank serves the community by connecting donors with recipients, 
              ensuring a steady supply of lifesaving blood.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Blood Donations</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5,000+</h3>
              <p className="text-gray-600">Registered Donors</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blood Inventory Section */}
      <div className="bg-gray-50 py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Blood Inventory</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Check our real-time blood inventory levels to see where your donation can make the biggest impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bloodInventory.map((item) => (
              <BloodTypeCard 
                key={item.bloodType}
                type={item.bloodType}
                available={item.available}
                required={item.required}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="font-medium">
              <Link to="/register">Donate Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="bg-white py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes blood donation easy and efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Register</h3>
              <p className="text-gray-600">
                Create your donor profile with personal and medical information.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule</h3>
              <p className="text-gray-600">
                Book an appointment at your preferred donation center.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Donate</h3>
              <p className="text-gray-600">
                Complete your donation and help save lives in your community.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-lg opacity-90 mb-8">
              Join our community of donors today and help ensure a stable blood supply for those in need.
              Every donation counts!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-medium">
                <Link to="/register">Register as Donor</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-primary font-medium">
                <Link to="/donors">Search Donors</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Our System</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our modern blood bank management system offers numerous advantages for donors and recipients alike.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Easy Registration</h3>
              </div>
              <p className="text-gray-600">
                Simple and quick registration process for new donors.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Real-time Inventory</h3>
              </div>
              <p className="text-gray-600">
                Up-to-date information on blood supply levels.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Detailed Records</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive donor and donation history tracking.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Efficient Search</h3>
              </div>
              <p className="text-gray-600">
                Quick and accurate donor search capabilities.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Data Visualization</h3>
              </div>
              <p className="text-gray-600">
                Clear visual representation of blood bank statistics.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Secure Data</h3>
              </div>
              <p className="text-gray-600">
                Protected storage of all donor and recipient information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
