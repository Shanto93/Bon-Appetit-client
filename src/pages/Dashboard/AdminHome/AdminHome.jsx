import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaFirstOrder, FaUsers } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: stats = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["chartData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderStat");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </>
    );
  }

  if (error || !stats) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  //Custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3} 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //Custom Shape for Pie chart
  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold my-3">
          Hi, Welcome {user.displayName ? user.displayName : "back"}!
        </h1>

        {/* Stats DIV */}
        <div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-3xl text-orange-500">
                <FaDollarSign></FaDollarSign>
              </div>
              <div className="stat-value">{stats.revenue} </div>
              <div className="stat-title">Revenue</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-3xl text-orange-500">
                <FaUsers></FaUsers>
              </div>
              <div className="stat-value">{stats.customers} </div>
              <div className="stat-title">Customers</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-3xl text-orange-500">
                <FaBook></FaBook>
              </div>
              <div className="stat-value">{stats.products} </div>
              <div className="stat-title">Products</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-3xl text-orange-500">
                <FaFirstOrder></FaFirstOrder>
              </div>
              <div className="stat-value">{stats.orders} </div>
              <div className="stat-title">Orders</div>
            </div>
          </div>
        </div>

        {/* Chart div */}
        <div className="flex mt-5">
          <div className="w-1/2">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
              </Bar>
            </BarChart>
          </div>

          {/* Pie Chart div */}
          <div className="w-1/2">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
