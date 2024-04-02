import { Metadata } from "next";
import TimeCalculator from "./time-calculator";

export const metadata: Metadata = {
  title: "Utilities: Time Calculator"
};

export default function TimeCalculatorPage() {
  return (
    <TimeCalculator />
  );
}