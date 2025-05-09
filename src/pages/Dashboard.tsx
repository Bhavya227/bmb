
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Droplets, Users, Calendar, TrendingUp, BarChart2 } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import { bloodInventory, donors, donationRecords } from "@/utils/data";
import DataTable from "@/components/ui/DataTable";

const Dashboard = () => {
  // Prepare data for charts
  const bloodInventoryForChart = bloodInventory.map(item => ({
    name: item.bloodType,
    available: item.available,
    required: item.required,
    deficit: Math.max(item.required - item.available, 0),
    surplus: Math.max(item.available - item.required, 0),
  }));
  
  const lastMonthDonations = 42;
  const currentMonthDonations = 58;
  const percentChange = Math.round(((currentMonthDonations - lastMonthDonations) / lastMonthDonations) * 100);
  
  const recentDonations = donationRecords.sort((a, b) => 
    new Date(b.donationDate).getTime() - new Date(a.donationDate).getTime()
  ).slice(0, 5);
  
  const recentDonationsWithNames = recentDonations.map(record => {
    const donor = donors.find(d => d.id === record.donorId);
    return {
      ...record,
      donorName: donor ? donor.name : "Unknown",
      bloodType: donor ? donor.bloodType : "Unknown",
    };
  });
  
  const bloodTypeDistribution = [
    { name: 'A+', value: donors.filter(d => d.bloodType === 'A+').length },
    { name: 'A-', value: donors.filter(d => d.bloodType === 'A-').length },
    { name: 'B+', value: donors.filter(d => d.bloodType === 'B+').length },
    { name: 'B-', value: donors.filter(d => d.bloodType === 'B-').length },
    { name: 'AB+', value: donors.filter(d => d.bloodType === 'AB+').length },
    { name: 'AB-', value: donors.filter(d => d.bloodType === 'AB-').length },
    { name: 'O+', value: donors.filter(d => d.bloodType === 'O+').length },
    { name: 'O-', value: donors.filter(d => d.bloodType === 'O-').length },
  ].filter(item => item.value > 0);
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A4DE6C', '#8884D8', '#FF6666', '#AAAAAA'];
  
  const columns = [
    {
      header: "Donor",
      accessorKey: "donorName",
    },
    {
      header: "Blood Type",
      accessorKey: "bloodType",
      cell: (row: any) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          row.bloodType.includes('O') ? 'bg-green-100 text-green-800' : 
          row.bloodType.includes('A') ? 'bg-blue-100 text-blue-800' :
          row.bloodType.includes('B') ? 'bg-yellow-100 text-yellow-800' :
          'bg-purple-100 text-purple-800'
        }`}>
          {row.bloodType}
        </span>
      )
    },
    {
      header: "Date",
      accessorKey: (row: any) => new Date(row.donationDate).toLocaleDateString(),
    },
    {
      header: "Amount",
      accessorKey: (row: any) => `${row.bloodAmount} ml`,
    },
    {
      header: "Center",
      accessorKey: "center",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (row: any) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          row.status === 'Completed' ? 'bg-green-100 text-green-800' : 
          row.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
          'bg-red-100 text-red-800'
        }`}>
          {row.status}
        </span>
      )
    },
  ];
  
  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Overview of blood bank operations and statistics</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Donors"
          value={donors.length}
          icon={<Users className="h-6 w-6" />}
          trend={{ value: 12, isPositive: true }}
        />
        
        <StatCard
          title="Eligible Donors"
          value={donors.filter(donor => donor.eligibleToDonate).length}
          icon={<Users className="h-6 w-6" />}
          trend={{ value: 5, isPositive: true }}
        />
        
        <StatCard
          title="Monthly Donations"
          value={currentMonthDonations}
          icon={<Calendar className="h-6 w-6" />}
          trend={{ value: percentChange, isPositive: percentChange > 0 }}
        />
        
        <StatCard
          title="Blood Units"
          value={bloodInventory.reduce((total, item) => total + item.available, 0)}
          icon={<Droplets className="h-6 w-6" />}
          trend={{ value: 3, isPositive: false }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Blood Inventory</h3>
              <p className="text-sm text-gray-500">Current stock vs required units</p>
            </div>
            <BarChart2 className="text-gray-400 h-5 w-5" />
          </div>
          
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={bloodInventoryForChart}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="available" name="Available Units" fill="#3182CE" />
                <Bar dataKey="required" name="Required Units" fill="#E53E3E" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Donor Distribution</h3>
              <p className="text-sm text-gray-500">By blood type</p>
            </div>
            <TrendingUp className="text-gray-400 h-5 w-5" />
          </div>
          
          <div className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={bloodTypeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    percent,
                    index,
                    name,
                  }) => {
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                    return (
                      <text
                        x={x}
                        y={y}
                        fill="white"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={12}
                        fontWeight="bold"
                      >
                        {name}
                      </text>
                    );
                  }}
                  outerRadius={80}
                  dataKey="value"
                >
                  {bloodTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => [`${value} donors`, 'Count']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Donations</h3>
            <p className="text-sm text-gray-500">Latest blood donation records</p>
          </div>
        </div>
        
        <DataTable
          columns={columns}
          data={recentDonationsWithNames}
        />
      </div>
    </div>
  );
};

export default Dashboard;
