import { createFileRoute } from "@tanstack/react-router";
import { DashboardCard } from "../features/components/dashboardCard";
import { DataTableDemo } from "../features/Inventory/inventoryOverciew";
export const Route = createFileRoute("/")({
  component: Index,
});

const cardInfo = [
  {
    title: "Total Inventory Value",
    value: "8.4M",
    percent: 12,
    description: "vs last month",
  },
  {
    title: "Total Inventory Value",
    value: "8.4M",
    percent: 12,
    description: "vs last month",
  },
];
function Index() {
  return (
    // <section className="flex flex-row">
    //   {cardInfo.map((card, index) => (
    //     <DashboardCard
    //       key={index}
    //       title={card.title}
    //       value={card.value}
    //       percent={card.percent}
    //       description={card.description}
    //     />
    //   ))}
    // </section>
    <DataTableDemo />
  );
}
