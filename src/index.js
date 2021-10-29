/**
 * メインコンポーネント
 */
import { useState } from "react";
import "./styles.css";

/**
 * ログアウトボタンコンポーネント
 */
const Logoutbutton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
);

/**
 * ログインボタンコンポーネント
 */
const Loginbutton = (props) => (
  <button onClick={props.toggleIsLoggedOut}>ログイン</button>
);

/**
 * ログインの状態を管理するコンポーネント
 */
const LoginControl = () => {
  // ステート変数を用意する。
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /**
   * クリックでステート変数を変化させる関数
   */
  const toggleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // isLoggedInの値で表示するボタンを変更する。
  if (!isLoggedIn) {
    return <Loginbutton toggleIsLoggedOut={toggleIsLoggedIn} />;
  }

  return <Logoutbutton toggleIsLoggedIn={toggleIsLoggedIn} />;
};

export default function App() {
  return <LoginControl />;
}
