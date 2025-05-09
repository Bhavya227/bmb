
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Code, Database, Globe, Layout, Layers, PenTool, Search, Server } from "lucide-react";

const TechStack: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Technology Stack</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the modern technologies that power our blood bank management system
        </p>
      </div>

      <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="tools">Tools & Deployment</TabsTrigger>
        </TabsList>
        
        <TabsContent value="frontend" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <TechCard 
              title="React"
              description="A JavaScript library for building user interfaces with component-based architecture"
              icon={<Layout className="h-10 w-10 text-blue-500" />}
              features={[
                "Component-based architecture",
                "Virtual DOM for performance",
                "Declarative UI development",
                "React Router for navigation"
              ]}
            />
            <TechCard 
              title="TypeScript"
              description="A strongly typed programming language that builds on JavaScript"
              icon={<Code className="h-10 w-10 text-blue-700" />}
              features={[
                "Static type checking",
                "Interface definitions",
                "Early error detection",
                "Improved code quality"
              ]}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <TechCard 
              title="Tailwind CSS"
              description="A utility-first CSS framework for rapidly building custom user interfaces"
              icon={<PenTool className="h-10 w-10 text-teal-500" />}
              features={[
                "Utility-first approach",
                "Responsive design system",
                "Low-level customization",
                "Optimized for production"
              ]}
            />
            <TechCard 
              title="Shadcn UI"
              description="A collection of reusable components built using Radix UI and Tailwind CSS"
              icon={<Layers className="h-10 w-10 text-purple-500" />}
              features={[
                "Accessible components",
                "Customizable design system",
                "Minimal bundle size",
                "Modern UI patterns"
              ]}
            />
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-lg font-medium mb-3">How Our Frontend Works</h3>
            <p className="text-gray-700 mb-4">
              Our blood bank application is built with React and TypeScript, providing a robust and type-safe codebase. 
              The UI is styled using Tailwind CSS for utility-first styling and Shadcn UI for pre-built accessible components.
            </p>
            <p className="text-gray-700">
              The application uses React Router for navigation between pages, context API for state management, 
              and React Query for efficient data fetching and caching. This combination creates a performant 
              and maintainable frontend application.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="backend" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <TechCard 
              title="RESTful API"
              description="A standardized approach to building APIs that follow REST principles"
              icon={<Server className="h-10 w-10 text-green-600" />}
              features={[
                "Resource-based endpoints",
                "Standard HTTP methods",
                "Stateless communication",
                "JSON data format"
              ]}
            />
            <TechCard 
              title="Database Management"
              description="Modern data storage solutions for blood bank information"
              icon={<Database className="h-10 w-10 text-orange-500" />}
              features={[
                "Donor information storage",
                "Blood inventory tracking",
                "Transaction history",
                "Data relationships"
              ]}
            />
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-lg font-medium mb-3">Backend Architecture</h3>
            <p className="text-gray-700 mb-4">
              Our backend follows a layered architecture pattern with clear separation of concerns.
              The API layer handles incoming requests, the service layer contains business logic,
              and the data access layer manages interactions with the database.
            </p>
            <p className="text-gray-700">
              We use RESTful API design principles to ensure our endpoints are intuitive and follow
              web standards. The system implements proper authentication and authorization to protect
              sensitive blood donor information.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="tools" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <TechCard 
              title="Version Control"
              description="Tools and methodologies for tracking and managing code changes"
              icon={<Code className="h-10 w-10 text-gray-700" />}
              features={[
                "Git for version control",
                "GitHub for repository hosting",
                "Branch-based workflow",
                "Pull request reviews"
              ]}
            />
            <TechCard 
              title="Deployment"
              description="Infrastructure and processes for deploying our application"
              icon={<Globe className="h-10 w-10 text-blue-600" />}
              features={[
                "Continuous Integration",
                "Automated testing",
                "Container-based deployment",
                "Monitoring and logging"
              ]}
            />
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-lg font-medium mb-3">Development Workflow</h3>
            <p className="text-gray-700 mb-4">
              Our development process follows modern best practices with a focus on code quality and collaboration.
              We use a feature branch workflow in Git, where new features are developed in separate branches 
              and merged after code review.
            </p>
            <p className="text-gray-700">
              Automated testing ensures reliability, while our CI/CD pipeline automates the build, test, and 
              deployment process. This workflow minimizes manual errors and enables rapid, reliable updates 
              to the blood bank system.
            </p>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-16 bg-primary/5 border border-primary/10 rounded-xl p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Why We Chose This Stack</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              Performance Optimized
            </h3>
            <p className="text-gray-600">
              Our technology choices prioritize performance to ensure a responsive experience even with 
              large datasets of donor and inventory information.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              Security Focused
            </h3>
            <p className="text-gray-600">
              We implement best practices for security to protect sensitive donor information and medical data
              throughout the entire stack.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              Scalable Architecture
            </h3>
            <p className="text-gray-600">
              The system is designed to scale with increasing numbers of donors, blood units, and transactions
              without compromising performance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              Maintainable Codebase
            </h3>
            <p className="text-gray-600">
              Modern development patterns and clear architecture ensure the system remains maintainable
              as features expand and the team grows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechCard = ({ 
  title, 
  description, 
  icon, 
  features 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  features: string[];
}) => {
  return (
    <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow card-hover">
      <CardHeader className="pb-3 flex flex-row items-center gap-3">
        <div className="bg-gray-50 p-3 rounded-lg">
          {icon}
        </div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="mt-1">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TechStack;
