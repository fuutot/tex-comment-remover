export function removeComments(texSource: string): string {
  // `%` で始まる行を完全に削除（改行も含めて）
  const singleLineCommentRemoved = texSource.replace(/^%.*\n?/gm, "");

  return singleLineCommentRemoved;
}

import * as fs from "fs";
import * as path from "path";

// テスト用のファイル読み込みと実行例
const projectRoot = process.cwd();
const exampleFilePath = path.join(
  projectRoot,
  "tests/fixtures/input/mixed-comments.tex",
);
const texContent = fs.readFileSync(exampleFilePath, "utf-8");

const cleanedContent = removeComments(texContent);
console.log(cleanedContent);
