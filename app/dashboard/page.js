export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">
      
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-gray-500">Total Customers</h2>
        <p className="text-3xl font-bold">120</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-gray-500">Leads</h2>
        <p className="text-3xl font-bold">45</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-gray-500">Revenue</h2>
        <p className="text-3xl font-bold">₹50,000</p>
      </div>

    </div>
  );
}