export default function Features() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Features</h2>

      <div className="grid grid-cols-3 gap-6 px-10">
        
        <div className="p-6 shadow rounded">
          <h3 className="font-bold">Customer Management</h3>
          <p>Manage all your clients easily</p>
        </div>

        <div className="p-6 shadow rounded">
          <h3 className="font-bold">Lead Tracking</h3>
          <p>Track leads and conversions</p>
        </div>

        <div className="p-6 shadow rounded">
          <h3 className="font-bold">Analytics</h3>
          <p>Get powerful insights</p>
        </div>

      </div>
    </section>
  );
}