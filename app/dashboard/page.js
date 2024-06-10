'use client';
import { Protect } from "@clerk/nextjs";
import Button from "../components/Button";


export default function Dashboard() {

  return (
    <Protect
      fallback={<p>You need to sign in to view this resource.</p>}
    >
      <h1>Dashboard</h1>
      <Button >Click me!</Button>
    </Protect>
  )
}