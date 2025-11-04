"use client";

import { useState } from "react";
import { removeComments } from "@/utils/removeComments";
import Alert, { AlertProps } from "@/components/Alert";

export default function Home() {
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleRemoveComments = () => {
    const result = removeComments(inputText);
    setOutputText(result);
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      setAlert({
        message: "出力テキストがクリップボードにコピーされました！",
        type: "success",
      });
    } catch (_) {
      setAlert({
        message: "クリップボードへのコピーに失敗しました。",
        type: "error",
      });
    }
  };

  const handleButtonClick = () => {
    handleRemoveComments();
    handleCopyToClipboard();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">TeX コメント削除ツール</h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
        {/* 入力エリア */}
        <div className="flex flex-col">
          <label htmlFor="input" className="mb-2 font-medium">
            入力 (TeX形式)
          </label>
          <textarea
            id="input"
            className="p-2 border rounded-md h-96"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="TeX形式の入力をここに貼り付けてください"
          />
        </div>

        {/* 出力エリア */}
        <div className="flex flex-col">
          <label htmlFor="output" className="mb-2 font-medium">
            出力 (コメント削除後)
          </label>
          <textarea
            id="output"
            className="p-2 border rounded-md h-96 bg-gray-200"
            value={outputText}
            readOnly
            placeholder="コメント削除後の結果がここに表示されます"
          />
        </div>
      </div>

      {/* アラート */}
      {alert && <Alert message={alert.message} type={alert.type} />}

      {/* ボタン */}
      <button
        type="button" // 送信ボタンとしての動作を防止
        onClick={handleButtonClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        コメント削除 & コピー
      </button>
    </div>
  );
}
