import Head from "next/head";
import { ReactNode } from "react";
import styles from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      {title &&
        typeof title === "string" && ( // 检查 title 是否为字符串
          <Head>
            <title>{title}</title>
          </Head>
        )}
      <main className={styles.container}>{children}</main>
    </>
  );
}
