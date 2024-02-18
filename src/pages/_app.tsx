import { SideBar, TopBar } from "@src/components";
import { AuthContextProvider } from "@src/context/AuthContext";
import "@src/styles/globals.css";
import Provider from "@src/utils/provider";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <div className="flex main h-full">
        <SideBar />
        <div className="flex flex-col flex-1">
          <TopBar />
          <main className="flex-1 p-4 bg-gray-100">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </Provider>
  );
}
