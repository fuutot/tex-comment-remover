export function removeComments(texSource: string): string {
  // `%` で始まる行を完全に削除（改行も含めて）
  const singleLineCommentExpr = /^%.*\n?/gm;
  const singleLineCommentRemoved = texSource.replace(singleLineCommentExpr, "");

  // `%` で途中から始まるコメントを削除
  const inlineCommentExpr = /(?<!\\)%.*$/gm;
  const inlineCommentRemoved = singleLineCommentRemoved.replace(
    inlineCommentExpr,
    "",
  );

  // `\begin{comment}` と `\end{comment}` の間を削除
  const multiLineCommentExpr =
    /\\begin\{comment\}[\s\S]*?\\end\{comment\}\n?/gm;
  const multiLineCommentRemoved = inlineCommentRemoved.replace(
    multiLineCommentExpr,
    "",
  );

  return multiLineCommentRemoved;
}
