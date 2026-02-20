import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Sidebar from "@/components/Sidebar";
import SayHiButton from "@/components/SayHiButton";

export const metadata: Metadata = {
  title: "Dinesh Kumar | Mechanical Design Engineer",
  description: "Portfolio of Dinesh Kumar - Mechanical Design Engineer specializing in SolidWorks, ANSYS, and CAD/CAE simulation"
};

export default function RootLayout({
  children


}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="ddc0b108-c184-40e6-8f6a-f0bc56c63339"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}' />

        <div className="flex min-h-screen !text-white">
          <Sidebar />
          <main className="flex-1 relative">
            {children}
          </main>
        </div>
        <SayHiButton />
        <VisualEditsMessenger />
      </body>
    </html>);

}