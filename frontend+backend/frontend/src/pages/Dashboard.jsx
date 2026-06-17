import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Dashboard Overview</h1>

          <p className="text-gray-500 mt-2">
            Manage your blog content and analytics.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="bg-slate-900 text-white px-5 py-3 rounded-lg">
            New User
          </button>

          <button className="bg-white border px-5 py-3 rounded-lg">
            New Post
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 mb-8">
        <DashboardCard title="Total Posts" value="39" bgColor="bg-blue-50" />

        <DashboardCard title="Published" value="39" bgColor="bg-purple-50" />

        <DashboardCard title="Drafts" value="0" bgColor="bg-green-50" />

        <DashboardCard title="Subscribers" value="3" bgColor="bg-orange-50" />
      </div>

      <div className="grid grid-cols-4 gap-5 mb-8">
        <DashboardCard title="Active Ads" value="0" bgColor="bg-blue-50" />

        <DashboardCard title="Impressions" value="0" bgColor="bg-green-50" />

        <DashboardCard title="Total Clicks" value="0" bgColor="bg-purple-50" />

        <DashboardCard title="Unread Inbox" value="0" bgColor="bg-orange-50" />
      </div>

      
    </main>
  );
}

export default Dashboard;
