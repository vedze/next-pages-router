import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    // 함수 내부에서도 페이지를 csr 방식으로 이동시킬 수 있다
    router.push("/test"); // push / back / replace(뒤로가기 방지하면서 페이지 이동) ...
  };

  // 특정 페이지 명시적 prefetch
  useEffect(() => {
    router.prefetch("/test");
  }, []);

  // prefetch 명시적 해지도 가능: prefetch={false}
  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"} prefetch={false}>
          search
        </Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
