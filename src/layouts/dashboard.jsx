import { Outlet } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { Configurator, Footer, TopNavbar, Sidenav } from "@/widgets/layout";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import routes from "@/routes";

const dashboardRoutes = routes.filter(({ layout }) => layout === "dashboard");

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar } = controller;
  const paddingTop = fixedNavbar ? "pt-28" : "pt-8";

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav routes={dashboardRoutes} />
      <div className="flex min-h-screen flex-col xl:pl-80">
        <TopNavbar />
        <main
          className={`${paddingTop} flex-1 px-4 pb-8 transition-all duration-300`}
        >
          <div className="mx-auto w-full max-w-6xl space-y-6">
            <Configurator />
            <IconButton
              size="lg"
              color="white"
              className="fixed bottom-8 right-8 z-40 hidden rounded-full shadow-blue-gray-900/10 md:flex"
              ripple={false}
              onClick={() => setOpenConfigurator(dispatch, true)}
            >
              <Cog6ToothIcon className="h-5 w-5" />
            </IconButton>
            <Outlet />
            <div className="text-blue-gray-600">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
