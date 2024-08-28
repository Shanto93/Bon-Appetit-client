import { useState, useEffect } from "react";
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

  const [chartSize, setChartSize] = useState({ width: 400, height: 400 });
  const [piechartSize, setPieChartSize] = useState({ width: 400, height: 400 });

  // Bara chart size
  useEffect(() => {
    const updateChartSize = () => {
      if (window.innerWidth < 640) {
        // Mobile devices
        setChartSize({ width: 280, height: 220 });
      } else if (window.innerWidth < 1024) {
        // Tablets
        setChartSize({ width: 400, height: 300 });
      } else {
        // PCs
        setChartSize({ width: 450, height: 350 });
      }
    };

    updateChartSize();
    window.addEventListener("resize", updateChartSize);

    return () => {
      window.removeEventListener("resize", updateChartSize);
    };
  }, []);

  // Pie Chart size
  useEffect(() => {
    const updatePieChartSize = () => {
      if (window.innerWidth < 640) {
        // Mobile devices
        setPieChartSize({ width: 250, height: 250 });
      } else if (window.innerWidth < 1024) {
        // Tablets
        setPieChartSize({ width: 400, height: 300 });
      } else {
        // PCs
        setPieChartSize({ width: 350, height: 350 });
      }
    };

    updatePieChartSize();
    window.addEventListener("resize", updatePieChartSize);

    return () => {
      window.removeEventListener("resize", updatePieChartSize);
    };
  }, []);

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

  const pieChartData = chartData.map((data) => ({
    name: data.category,
    value: data.revenue,
  }));

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
    <div className="p-4">
      <h1 className="text-xl md:text-2xl font-semibold mb-4">
        Hi, Welcome {user.displayName ? user.displayName : "back"}!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat shadow">
          <div className="stat-figure text-3xl text-orange-500">
            <FaDollarSign />
          </div>
          <div className="stat-value text-lg md:text-xl lg:text-2xl">
            {stats.revenue}
          </div>
          <div className="stat-title">Revenue</div>
        </div>

        <div className="stat shadow">
          <div className="stat-figure text-3xl text-orange-500">
            <FaUsers />
          </div>
          <div className="stat-value text-lg md:text-xl lg:text-2xl">
            {stats.customers}
          </div>
          <div className="stat-title">Customers</div>
        </div>

        <div className="stat shadow">
          <div className="stat-figure text-3xl text-orange-500">
            <FaBook />
          </div>
          <div className="stat-value text-lg md:text-xl lg:text-2xl">
            {stats.products}
          </div>
          <div className="stat-title">Products</div>
        </div>

        <div className="stat shadow">
          <div className="stat-figure text-3xl text-orange-500">
            <FaFirstOrder />
          </div>
          <div className="stat-value text-lg md:text-xl lg:text-2xl">
            {stats.orders}
          </div>
          <div className="stat-title">Orders</div>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-5 md:gap-20 lg:grid-cols-2">
        <div className="w-full">
          <BarChart
            width={chartSize.width}
            height={chartSize.height}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            className="mx-auto"
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

        <div className="w-full">
          <PieChart
            width={piechartSize.width}
            height={piechartSize.height}
            className="mx-auto"
          >
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius="80%"
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
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
