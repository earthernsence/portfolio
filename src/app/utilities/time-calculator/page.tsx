import { Metadata } from "next";
import TimeCalculator from "./time-calculator"

export const metadata: Metadata = {
  title: "Utilities: Time Calculator"
};

export default function Utilities() {
  return (
    <TimeCalculator />
  )
}