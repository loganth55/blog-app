function StatsCard({ title, value, bgColor }) {
  return (
    <div
      className={`${bgColor} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all`}
    >
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>

      <p className="text-4xl font-bold mt-3">{value}</p>
    </div>
  );
}

export default StatsCard;
