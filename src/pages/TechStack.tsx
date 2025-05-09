
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Layout, Layers, Package, Palette } from "lucide-react";

const TechStack = () => {
  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Technology Stack</h1>
        <p className="text-lg text-gray-600">
          Detailed overview of the technologies powering our blood bank management system
        </p>
      </div>

      <Tabs defaultValue="frontend" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="state">State Management</TabsTrigger>
          <TabsTrigger value="storage">Data Storage</TabsTrigger>
        </TabsList>

        <TabsContent value="frontend" className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Frontend Architecture</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>React</CardTitle>
                  <CardDescription>Component Library</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Our application is built with React, a JavaScript library for building user interfaces. 
                  We use functional components and hooks to manage component state and side effects.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Key React Features Used:</h4>
                  <ul className="list-disc ml-5 text-sm mt-2 text-gray-600 space-y-1">
                    <li>Functional Components</li>
                    <li>React Hooks (useState, useEffect)</li>
                    <li>Context API</li>
                    <li>Custom Hooks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>React Router</CardTitle>
                  <CardDescription>Navigation Library</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  We implement client-side routing with React Router, allowing for dynamic navigation 
                  without page reloads. This creates a smooth, app-like user experience.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Implementation Details:</h4>
                  <ul className="list-disc ml-5 text-sm mt-2 text-gray-600 space-y-1">
                    <li>BrowserRouter for HTML5 history API</li>
                    <li>Route components for path matching</li>
                    <li>Link components for navigation</li>
                    <li>useLocation hook for route awareness</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Tailwind CSS</CardTitle>
                  <CardDescription>Styling Framework</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Tailwind CSS is our utility-first CSS framework that allows for rapid UI development
                  with highly customizable, low-level utility classes.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Key Features:</h4>
                  <ul className="list-disc ml-5 text-sm mt-2 text-gray-600 space-y-1">
                    <li>Responsive design using breakpoints</li>
                    <li>Custom color palette and theme</li>
                    <li>Component styling with utility classes</li>
                    <li>Dark/light mode support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>shadcn/ui</CardTitle>
                  <CardDescription>UI Component Library</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  We use shadcn/ui for accessible, customizable UI components built on top of Radix UI
                  primitives. These components provide excellent accessibility and styling flexibility.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Components Used:</h4>
                  <ul className="list-disc ml-5 text-sm mt-2 text-gray-600 space-y-1">
                    <li>Button, Card, Tabs components</li>
                    <li>Form controls and inputs</li>
                    <li>Navigation elements</li>
                    <li>Toast notifications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="state" className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">State Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>TanStack Query</CardTitle>
                  <CardDescription>Data Fetching & Caching</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  TanStack Query (React Query) is used for data fetching, caching, and state management.
                  It provides tools to handle server state with automatic background refetching and cache invalidation.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Implementation Details:</h4>
                  <ul className="list-disc ml-5 text-sm mt-2 text-gray-600 space-y-1">
                    <li>QueryClient for global configuration</li>
                    <li>useQuery hooks for data fetching</li>
                    <li>Query invalidation for data refetching</li>
                    <li>Optimistic updates for UI responsiveness</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>React Hooks</CardTitle>
                  <CardDescription>Component State Management</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  We use React's built-in hooks for component-level state management. This includes
                  useState for local state and useEffect for side effects and lifecycle events.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Hooks Pattern:</h4>
                  <ul className="list-disc ml-5 text-sm mt-2 text-gray-600 space-y-1">
                    <li>useState for component state</li>
                    <li>useEffect for side effects</li>
                    <li>Custom hooks for reusable logic</li>
                    <li>Form state management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="storage" className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Data Storage & Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>LocalStorage</CardTitle>
                  <CardDescription>Client-side Persistence</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  We use the browser's localStorage API to persist donor data locally. This provides a
                  simple storage solution for demonstration purposes.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Implementation Details:</h4>
                  <ul className="list-disc ml-5 text-sm mt-2 text-gray-600 space-y-1">
                    <li>JSON serialization/deserialization</li>
                    <li>Donor data persistence</li>
                    <li>User preferences storage</li>
                    <li>Utils layer abstraction</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Code Example:</h4>
                  <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2 overflow-auto">
{`// Get donors from localStorage
export const getDonors = (): Donor[] => {
  const storedDonors = localStorage.getItem('donors');
  if (storedDonors) {
    return JSON.parse(storedDonors);
  }
  return [];
};`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>TypeScript</CardTitle>
                  <CardDescription>Type Safety</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  TypeScript provides static type checking for our JavaScript code, enabling better
                  code quality, developer experience, and maintainability.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Type System Features:</h4>
                  <ul className="list-disc ml-5 text-sm mt-2 text-gray-600 space-y-1">
                    <li>Interfaces for data models</li>
                    <li>Type aliases for complex types</li>
                    <li>Generics for reusable components</li>
                    <li>Strict null checking</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Code Example:</h4>
                  <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2 overflow-auto">
{`export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface Donor {
  id: string;
  name: string;
  email: string;
  phone: string;
  bloodType: BloodType;
  lastDonation: string;
  address: string;
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">System Architecture</h2>
        <p className="text-gray-600 mb-6">
          Our application follows a component-based architecture with clear separation of concerns:
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <ul className="space-y-4">
            <li>
              <div className="font-medium">🔷 Pages Layer</div>
              <p className="text-sm text-gray-600 ml-5">Top-level route components that compose the UI from smaller components</p>
            </li>
            <li>
              <div className="font-medium">🔷 Components Layer</div>
              <p className="text-sm text-gray-600 ml-5">Reusable UI elements organized by feature and responsibility</p>
            </li>
            <li>
              <div className="font-medium">🔷 Utils Layer</div>
              <p className="text-sm text-gray-600 ml-5">Helper functions, type definitions, and data management utilities</p>
            </li>
            <li>
              <div className="font-medium">🔷 Hooks Layer</div>
              <p className="text-sm text-gray-600 ml-5">Custom React hooks for reusable stateful logic</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
