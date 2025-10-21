import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CircularProgress } from "./CircularProgress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

export function DashboardView() {
  const weeklyData = [
    { day: "Mon", tasks: 8, completed: 6, study: 3 },
    { day: "Tue", tasks: 12, completed: 10, study: 4 },
    { day: "Wed", tasks: 10, completed: 8, study: 5 },
    { day: "Thu", tasks: 15, completed: 12, study: 2 },
    { day: "Fri", tasks: 9, completed: 9, study: 6 },
    { day: "Sat", tasks: 5, completed: 4, study: 8 },
    { day: "Sun", tasks: 3, completed: 3, study: 7 },
  ];

  const categoryData = [
    { name: "Work", value: 45 },
    { name: "Study", value: 30 },
    { name: "Personal", value: 15 },
    { name: "Other", value: 10 },
  ];

  const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl">62</div>
            <p className="text-muted-foreground mt-1">This week</p>
            <Badge variant="success" className="mt-3">+12% growth</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl">52</div>
            <p className="text-muted-foreground">83.9% completion</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Study Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl">35</div>
            <p className="text-muted-foreground">This week</p>
          </CardContent>
        </Card>
        <Card className="flex items-center justify-center">
          <CardContent className="pt-6">
            <CircularProgress value={83.9} size={150} strokeWidth={10} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Legend />
                <Bar dataKey="tasks" fill="#FF6B4A" radius={[8, 8, 0, 0]} />
                <Bar dataKey="completed" fill="#9BFF6F" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study Hours Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="study" stroke="#FFD93D" strokeWidth={3} dot={{ fill: '#FFD93D', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tasks by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { action: "Completed 'Project Documentation'", time: "2 hours ago" },
                { action: "Started 'Learn TypeScript'", time: "5 hours ago" },
                { action: "Completed 'Morning Workout'", time: "8 hours ago" },
                { action: "Created 'Weekly Report' task", time: "1 day ago" },
                { action: "Completed 'Code Review'", time: "1 day ago" },
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-start p-2 rounded-md hover:bg-muted/50">
                  <p className="flex-1">{activity.action}</p>
                  <p className="text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
