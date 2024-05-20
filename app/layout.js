import Header from "@/components/header";
import Chatbot from "@/components/chatbot";
import { robotoVar } from "@/utils/font";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | koshal Parwan",
    default: "Koshal Parwan"
  },
  description: "Koshal Parwan Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoVar}>
      <body className="font-roboto">
        <Header />
        <main className="mt-12">
          {children}
        </main>

        <Chatbot />
      </body>
    </html>
  );
}
