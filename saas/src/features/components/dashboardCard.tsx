import type { FC, ReactElement } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import type { TDashboardCard } from "../types/card.interface";

export const DashboardCard: FC<TDashboardCard> = (
  props: TDashboardCard,
): ReactElement => {
  const { title, value, percent, description } = props;
  return (
    <Card className="w-96 p-4">
      <CardHeader>
        <CardTitle className="font-light">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{value}</p>
      </CardContent>
      <hr className="w-full mx-auto"></hr>
      <CardFooter className="flex justify-between">
        <p>{percent}</p>
        <p>{description}</p>
      </CardFooter>
    </Card>
  );
};
