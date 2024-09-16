import { UniversityGrid } from "./universities";
export const MainContent = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <div className="bg-blue-100 p-6 rounded-lg mt-6">
        <h2 className="text-xl font-semibold">Welcome back, Ayo 👋</h2>
        <UniversityGrid />
      </div>
    </div>
  );
};
